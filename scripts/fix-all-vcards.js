const fs = require('fs');
const path = require('path');

const vcardsDir = path.join(__dirname, '../public/vcards-2026');
const sharedAssetsDir = path.join(vcardsDir, '_shared');
const urlsPath = path.join(__dirname, '../vcard_urls.txt');

// Helper to remove directory recursively (standard fs.rmSync is Node 14.14+)
function removeDir(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
            const curPath = path.join(dirPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                removeDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirPath);
    }
}

console.log('--- Aureole vCard Branding Tool ---');
console.log(`Scanning: ${vcardsDir}\n`);

const folders = fs.readdirSync(vcardsDir).filter(f => 
    fs.lstatSync(path.join(vcardsDir, f)).isDirectory() && f !== '_shared'
);

let urlsChanged = false;
let urlsContent = fs.readFileSync(urlsPath, 'utf8');

folders.forEach(slug => {
    const folderPath = path.join(vcardsDir, slug);
    const indexPath = path.join(folderPath, 'index.html');

    if (!fs.existsSync(indexPath)) return;

    console.log(`Processing: [${slug}]`);
    let html = fs.readFileSync(indexPath, 'utf8');
    let modified = false;

    // 1. Update stylesheet paths to use shared assets
    if (html.includes('href="assets/css/')) {
        console.log(`  - Updating CSS paths to shared assets...`);
        html = html.replace(/href="assets\/css\//g, 'href="../_shared/css/');
        modified = true;
    }

    // 2. Update script paths to use shared assets
    if (html.includes('src="assets/js/')) {
        console.log(`  - Updating JS paths to shared assets...`);
        html = html.replace(/src="assets\/js\//g, 'src="../_shared/js/');
        modified = true;
    }

    // 3. Fix potential OG Title mismatch (often copied from template)
    // We try to extract the real name from the <h1> tag
    const h1Match = html.match(/<h1>(.*?)<\/h1>/);
    if (h1Match) {
        const name = h1Match[1].trim();
        const ogTitlePattern = /property="og:title" content="(.*?)"/;
        const ogMatch = html.match(ogTitlePattern);
        
        if (ogMatch && !ogMatch[1].includes(name)) {
            console.log(`  - Fixing OG Title (found: "${ogMatch[1]}", naming to: "${name}")`);
            html = html.replace(ogTitlePattern, `property="og:title" content="${name} | Digital V-Card | AUREOLE PHARMA PVT. LTD."`);
            modified = true;
        }
    }

    // 4. Save changes if any
    if (modified) {
        fs.writeFileSync(indexPath, html);
        console.log(`  - √ index.html updated.`);
    }

    // 5. Cleanup redundant local assets
    const localCss = path.join(folderPath, 'assets/css');
    const localJs = path.join(folderPath, 'assets/js');
    
    if (fs.existsSync(localCss)) {
        console.log(`  - Deleting redundant local CSS folder...`);
        removeDir(localCss);
    }
    if (fs.existsSync(localJs)) {
        console.log(`  - Deleting redundant local JS folder...`);
        removeDir(localJs);
    }

    // 6. Update vcard_urls.txt if missing
    if (!urlsContent.includes(`/vcards/${slug}/`)) {
        urlsContent += `  <url>\n    <loc>https://www.aureolepharmatech.com/vcards/${slug}/</loc>\n  </url>\n`;
        urlsChanged = true;
        console.log(`  - Added to vcard_urls.txt`);
    }
});

if (urlsChanged) {
    fs.writeFileSync(urlsPath, urlsContent);
}

console.log('\nAll vCards have been processed and branded successfully!');
