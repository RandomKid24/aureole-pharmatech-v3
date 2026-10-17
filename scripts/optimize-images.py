import os
import subprocess
import re

# Dynamically resolve project root directory
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR)
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")

# Max image width. 2400px stays sharp on retina / 4K screens while still cutting 7000px+ camera originals.
MAX_W = 2400

IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.JPG', '.PNG', '.JPEG']

def get_dir_size(path):
    total = 0
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
    return total

print("==================================================")
print("🖼️  AUTOMATED IMAGE OPTIMIZATION SCRIPT")
print("==================================================")

initial_size = get_dir_size(PUBLIC_DIR)
print(f"Initial public/ size: {initial_size / (1024*1024):.2f} MB\n")

target_images = []
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        ext = os.path.splitext(f)[1]
        if ext in IMAGE_EXTS and not f.endswith(".webp"):
            target_images.append(os.path.join(root, f))

if not target_images:
    print("✨ All images are already optimized to WebP!")

replacements = {}

for img_path in target_images:
    ext = os.path.splitext(img_path)[1].lower()
    webp_path = os.path.splitext(img_path)[0] + ".webp"
    
    # cwebp compression with max-width scaling to prevent oversized camera/4K+ assets
    q = "90" if ext in [".png", ".PNG"] else "85"
    # only downscale: cwebp -resize always scales to the exact width, which would stretch small images/icons
    try:
        from PIL import Image as _Img
        with _Img.open(img_path) as _im:
            too_wide = _im.size[0] > MAX_W
    except Exception:
        too_wide = False
    resize_arg = f"-resize {MAX_W} 0 " if too_wide else ""
    cmd = f'cwebp {resize_arg}-q {q} "{img_path}" -o "{webp_path}"'
    
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    converted_ok = res.returncode == 0 and os.path.exists(webp_path)
    
    # Fallback to Pillow if cwebp is not installed / available
    if not converted_ok:
        try:
            from PIL import Image
            im = Image.open(img_path)
            im.save(webp_path, "WEBP", quality=int(q))
            converted_ok = os.path.exists(webp_path)
        except Exception as e:
            print(f"Failed to convert {img_path} with Pillow: {e}")

    if converted_ok:
        orig_sz = os.path.getsize(img_path)
        new_sz = os.path.getsize(webp_path)
        
        rel_img = os.path.relpath(img_path, PUBLIC_DIR).replace("\\", "/")
        rel_webp = os.path.relpath(webp_path, PUBLIC_DIR).replace("\\", "/")
        
        print(f"Converted: {rel_img} ({orig_sz/1024:.1f}KB -> {new_sz/1024:.1f}KB)")
        
        # Also store original filename (e.g. logo.png -> logo.webp or profile.png -> profile.webp)
        filename_old = os.path.basename(img_path)
        filename_new = os.path.basename(webp_path)

        replacements[rel_img] = rel_webp
        replacements["/" + rel_img] = "/" + rel_webp
        replacements[filename_old] = filename_new
        
        # Remove original uncompressed file
        try:
            os.remove(img_path)
        except Exception as e:
            print(f"Failed to remove {img_path}: {e}")

# Update all code references
if replacements:
    print("\nUpdating code references across project...")
    CODE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md']
    for root, dirs, files in os.walk(ROOT_DIR):
        if "node_modules" in root or ".git" in root or "dist" in root:
            continue
        for f in files:
            if os.path.splitext(f)[1] in CODE_EXTS:
                cf = os.path.join(root, f)
                try:
                    with open(cf, "r", encoding="utf-8", errors="ignore") as file:
                        content = file.read()
                    
                    orig_content = content
                    for old_rel, new_rel in replacements.items():
                        if old_rel in content:
                            content = content.replace(old_rel, new_rel)
                    
                    if content != orig_content:
                        with open(cf, "w", encoding="utf-8") as file:
                            file.write(content)
                        print(f"Updated references in: {os.path.relpath(cf, ROOT_DIR)}")
                except Exception as e:
                    print(f"Error updating {cf}: {e}")

# ---------------------------------------------------------------------------
# Second pass: shrink assets that are ALREADY .webp / .mp4 (the pass above skips them).
# Caps width at MAX_W (webp) and re-encodes heavy videos. A file is replaced only if it gets smaller.
# ---------------------------------------------------------------------------
WEBP_RESHRINK_OVER = 400 * 1024   # also re-encode webp above this size even if narrow enough
VIDEO_OVER = 1.5 * 1024 * 1024
saved = 0

try:
    from PIL import Image
except ImportError:
    Image = None
    print("Pillow missing: skipping webp shrink pass")

if Image:
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            if not f.lower().endswith(".webp"):
                continue
            fp = os.path.join(root, f)
            old = os.path.getsize(fp)
            try:
                with Image.open(fp) as im:
                    if getattr(im, "is_animated", False):
                        continue
                    w, h = im.size
                    if w <= MAX_W and old <= WEBP_RESHRINK_OVER:
                        continue
                    im = im.copy()
                if w > MAX_W:
                    im = im.resize((MAX_W, round(h * MAX_W / w)), Image.LANCZOS)
                tmp = fp + ".tmp"
                im.save(tmp, "WEBP", quality=80, method=6)
                new = os.path.getsize(tmp)
                # Resized files always win. For narrow-but-heavy files only keep a re-encode that saves >=15%,
                # so running the script repeatedly doesn't degrade already-optimized images.
                if new < old and (w > MAX_W or new < old * 0.85):
                    os.replace(tmp, fp)
                    saved += old - new
                    print(f"Shrunk webp: {os.path.relpath(fp, PUBLIC_DIR)} ({old/1024:.0f}KB -> {new/1024:.0f}KB)")
                else:
                    os.remove(tmp)
            except Exception as e:
                print(f"Skipped {fp}: {e}")
                if os.path.exists(fp + ".tmp"):
                    os.remove(fp + ".tmp")

if subprocess.run("which ffmpeg", shell=True, capture_output=True).returncode == 0:
    for root, dirs, files in os.walk(PUBLIC_DIR):
        for f in files:
            if not f.lower().endswith(".mp4"):
                continue
            fp = os.path.join(root, f)
            old = os.path.getsize(fp)
            if old < VIDEO_OVER:
                continue
            tmp = fp + ".tmp.mp4"
            cmd = (f'ffmpeg -y -loglevel error -i "{fp}" -vf "scale=\'min(1280,iw)\':-2" -c:v libx264 -crf 28 '
                   f'-preset slow -c:a aac -b:a 96k -movflags +faststart "{tmp}"')
            if subprocess.run(cmd, shell=True).returncode == 0 and os.path.exists(tmp) and os.path.getsize(tmp) < old * 0.9:
                new = os.path.getsize(tmp)
                os.replace(tmp, fp)
                saved += old - new
                print(f"Shrunk mp4: {os.path.relpath(fp, PUBLIC_DIR)} ({old/1048576:.1f}MB -> {new/1048576:.1f}MB)")
            elif os.path.exists(tmp):
                os.remove(tmp)
else:
    print("ffmpeg not found: skipping mp4 shrink pass")

print(f"Second pass saved {saved / (1024*1024):.1f} MB")

final_size = get_dir_size(PUBLIC_DIR)
print("\n--------------------------------------------------")
print(f"Initial public/ size: {initial_size / (1024*1024):.2f} MB")
print(f"Final public/ size:   {final_size / (1024*1024):.2f} MB")
if initial_size > 0:
    print(f"Total Space Saved:    {((initial_size - final_size) / initial_size) * 100:.1f}%")
print("--------------------------------------------------")
