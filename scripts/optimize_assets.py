import os
import glob
import subprocess
import re

ROOT_DIR = "/Users/ady/Documents/aureole-pharmatech-v3"
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")

def get_dir_size(path):
    total = 0
    for root, dirs, files in os.walk(path):
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
    return total

initial_size = get_dir_size(PUBLIC_DIR)
print(f"Initial public/ size: {initial_size / (1024*1024):.2f} MB")

# Step 1: Remove unused header.gif files in vcards-2026
unused_gifs = glob.glob(os.path.join(PUBLIC_DIR, "vcards-2026", "**", "header.gif"), recursive=True)
print(f"Found {len(unused_gifs)} unused header.gif files.")
for g in unused_gifs:
    try:
        os.remove(g)
    except Exception as e:
        print(f"Error removing {g}: {e}")

# Step 2: Compress .mp4 videos using ffmpeg
mp4_files = glob.glob(os.path.join(PUBLIC_DIR, "**", "*.mp4"), recursive=True)
print(f"Compressing {len(mp4_files)} .mp4 videos...")
for mp4 in mp4_files:
    temp_mp4 = mp4 + ".tmp.mp4"
    cmd = ["ffmpeg", "-y", "-i", mp4, "-vcodec", "libx264", "-crf", "28", "-preset", "fast", temp_mp4]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode == 0 and os.path.exists(temp_mp4):
        orig_sz = os.path.getsize(mp4)
        new_sz = os.path.getsize(temp_mp4)
        if new_sz < orig_sz:
            os.replace(temp_mp4, mp4)
            print(f"Video {os.path.basename(mp4)}: {orig_sz/(1024*1024):.2f}MB -> {new_sz/(1024*1024):.2f}MB")
        else:
            os.remove(temp_mp4)

# Step 3: Collect PNG/JPG/JPEG files to convert to WEBP
# Target subfolders: 'Aureole Product 3D', 'products', 'plants', 'about', 'events', 'compliance', 'vcards-2026'
IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.JPG', '.PNG', '.JPEG']
image_files = []

for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        ext = os.path.splitext(f)[1]
        if ext in IMAGE_EXTS and not f.endswith('.webp'):
            # Skip logos if small or SVG
            image_files.append(os.path.join(root, f))

print(f"Found {len(image_files)} images to convert to WebP.")

# Map of old relative path -> new relative path for code replacement
replacements = {}

for img_path in image_files:
    rel_path = os.path.relpath(img_path, PUBLIC_DIR)
    # create webp path
    base_no_ext = os.path.splitext(img_path)[0]
    webp_path = base_no_ext + ".webp"
    rel_webp_path = os.path.relpath(webp_path, PUBLIC_DIR)
    
    ext = os.path.splitext(img_path)[1].lower()
    q = "90" if ext in [".png", ".PNG"] else "85"
    
    cmd = ["cwebp", "-q", q, img_path, "-o", webp_path]
    res = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if res.returncode == 0 and os.path.exists(webp_path):
        orig_sz = os.path.getsize(img_path)
        new_sz = os.path.getsize(webp_path)
        print(f"Converted: {rel_path} ({orig_sz/1024:.1f}KB -> {new_sz/1024:.1f}KB)")
        
        replacements[rel_path] = rel_webp_path
        # Also map leading slash versions
        replacements["/" + rel_path] = "/" + rel_webp_path
        # Remove old image
        try:
            os.remove(img_path)
        except Exception as e:
            print(f"Error deleting {img_path}: {e}")

# Step 4: Update all code references
print("Updating code references across project...")
CODE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.md']
code_files = []
for root, dirs, files in os.walk(ROOT_DIR):
    if "node_modules" in root or ".git" in root or "scripts" in root:
        continue
    for f in files:
        if os.path.splitext(f)[1] in CODE_EXTS:
            code_files.append(os.path.join(root, f))

for cf in code_files:
    try:
        with open(cf, "r", encoding="utf-8", errors="ignore") as file:
            content = file.read()
        
        modified = False
        for old_rel, new_rel in replacements.items():
            if old_rel in content:
                content = content.replace(old_rel, new_rel)
                modified = True
        
        if modified:
            with open(cf, "w", encoding="utf-8") as file:
                file.write(content)
            print(f"Updated references in: {os.path.relpath(cf, ROOT_DIR)}")
    except Exception as e:
        print(f"Error processing {cf}: {e}")

final_size = get_dir_size(PUBLIC_DIR)
print("--------------------------------------------------")
print(f"Initial public/ size: {initial_size / (1024*1024):.2f} MB")
print(f"Final public/ size:   {final_size / (1024*1024):.2f} MB")
print(f"Total Bandwidth Savings: {((initial_size - final_size) / initial_size) * 100:.1f}%")
print("--------------------------------------------------")
