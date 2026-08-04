import os
import subprocess

ROOT_DIR = "/Users/ady/Documents/aureole-pharmatech-v3"
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")

print("Converting all PNG images in public/ to WebP...")

png_files = []
for root, dirs, files in os.walk(PUBLIC_DIR):
    for f in files:
        if f.endswith(".png") and not f.endswith(".webp"):
            png_files.append(os.path.join(root, f))

print(f"Found {len(png_files)} PNG files.")

replacements = {}

for png_path in png_files:
    webp_path = os.path.splitext(png_path)[0] + ".webp"
    cmd = f'cwebp -q 90 "{png_path}" -o "{webp_path}"'
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode == 0 and os.path.exists(webp_path):
        orig_sz = os.path.getsize(png_path)
        new_sz = os.path.getsize(webp_path)
        rel_png = os.path.relpath(png_path, PUBLIC_DIR)
        rel_webp = os.path.relpath(webp_path, PUBLIC_DIR)
        print(f"Converted: {rel_png} ({orig_sz/(1024*1024):.2f}MB -> {new_sz/1024:.1f}KB)")
        
        replacements[rel_png] = rel_webp
        replacements["/" + rel_png] = "/" + rel_webp
        
        # Remove original heavy PNG
        os.remove(png_path)

# Update code references
print("Updating code references across project...")
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
                modified = False
                for old_rel, new_rel in replacements.items():
                    if old_rel in content:
                        content = content.replace(old_rel, new_rel)
                        modified = True
                if modified:
                    with open(cf, "w", encoding="utf-8") as file:
                        file.write(content)
                    print(f"Updated: {os.path.relpath(cf, ROOT_DIR)}")
            except Exception as e:
                print(f"Error processing {cf}: {e}")

print("Done converting PNGs!")
