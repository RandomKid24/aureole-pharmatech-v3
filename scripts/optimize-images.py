import os
import subprocess
import re

# Dynamically resolve project root directory
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(SCRIPT_DIR)
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")

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
    
    # cwebp compression with max 1600px width scaling to prevent oversized 4K assets
    q = "90" if ext in [".png", ".PNG"] else "85"
    cmd = f'cwebp -resize 1600 0 -q {q} "{img_path}" -o "{webp_path}"'
    
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(webp_path):
        orig_sz = os.path.getsize(img_path)
        new_sz = os.path.getsize(webp_path)
        
        rel_img = os.path.relpath(img_path, PUBLIC_DIR)
        rel_webp = os.path.relpath(webp_path, PUBLIC_DIR)
        
        print(f"Converted: {rel_img} ({orig_sz/1024:.1f}KB -> {new_sz/1024:.1f}KB)")
        
        replacements[rel_img] = rel_webp
        replacements["/" + rel_img] = "/" + rel_webp
        
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

final_size = get_dir_size(PUBLIC_DIR)
print("\n--------------------------------------------------")
print(f"Initial public/ size: {initial_size / (1024*1024):.2f} MB")
print(f"Final public/ size:   {final_size / (1024*1024):.2f} MB")
if initial_size > 0:
    print(f"Total Space Saved:    {((initial_size - final_size) / initial_size) * 100:.1f}%")
print("--------------------------------------------------")
