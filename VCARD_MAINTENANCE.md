# V-Card Maintenance Guide

This guide explains how to add a new digital vCard to the site and ensure it follows the shared assets pattern for efficiency.

## 1. Add the Folder
1. Create a new folder for the person in `public/vcards-2026/` (e.g., `yogeeta-pawar`).
2. Add the `index.html` and necessary images (in `assets/images/`).
3. **Important:** Ensure the folder name (slug) matches what you'll use in the scripts.

## 2. Implement Shared Assets
To save space and ensure consistency, vCards use a shared `_shared` folder for CSS and JS.

1. In the new vCard's `index.html`, update path references:
   - Change `href="assets/css/...` to `href="../_shared/css/...`
   - Change `src="assets/js/...` to `src="../_shared/js/...`
2. Once the paths are updated, you can safely **delete** the local `assets/css` and `assets/js` folders within the vCard directory.

## 3. Fix Contact Download Script
At the bottom of `index.html`, there is a script to "Add to Contact".
1. Update the `contact` object with the person's details.
2. **Note:** Strip all spaces from the `phone` field (e.g., `+918600858524`) as this is the standard pattern used in the site.

## 4. Update Sitemap and URLs
To make the vCard discoverable and visible to search engines:

### Update `generate-sitemap.js`
1. Open `scripts/generate-sitemap.js`.
2. Find the `VCARDS` array.
3. Add the new folder name (slug) at the end of the array.

### Update `vcard_urls.txt`

> [!IMPORTANT]
> `vcard_urls.txt` in the root directory is a critical file used by your automation scripts to build sitemaps and register links. Do not delete it or move it to a backup directory.

1. Open `vcard_urls.txt` in the root directory.
2. Add a new `<url>` entry at the end of the file:
   ```xml
     <url>
       <loc>https://www.aureolepharmatech.com/vcards/[slug]/</loc>
     </url>
   ```

### Regenerate the Sitemap
Run the following command in the terminal:
```bash
npm run sitemap
```

## Summary Checklist
- [ ] Folder added to `public/vcards-2026/`
- [ ] `index.html` updated with `../_shared/` paths
- [ ] Redundant `assets/css/` and `assets/js/` deleted
- [ ] Contact script phone number stripped of spaces
- [ ] Added slug to `scripts/generate-sitemap.js`
- [ ] Added URL to `vcard_urls.txt`
- [ ] Ran `npm run sitemap`
