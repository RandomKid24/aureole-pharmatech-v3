import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const VCARDS_DIR = path.join(__dirname, '../public/vcards-2026');
const SHARED_ASSETS_PATH = '../_shared'; // Relative path from a vCard folder
const URLS_FILE = path.join(__dirname, '../vcard_urls.txt');
const SITE_URL_BASE = 'https://www.aureolepharmatech.com/vcards/';

// Utility: Recursive directory removal
function deleteFolderRecursive(directory) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const curPath = path.join(directory, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(directory);
    }
}

console.log('--- Aureole vCard Automatic Importer ---');
console.log(`Scanning: ${VCARDS_DIR}\n`);

// Get all vCard folders (exclude _shared)
const folders = fs.readdirSync(VCARDS_DIR).filter(f => 
    fs.lstatSync(path.join(VCARDS_DIR, f)).isDirectory() && f !== '_shared'
);

let urlsContent = fs.readFileSync(URLS_FILE, 'utf8');
let urlsModified = false;

folders.forEach(slug => {
    const folderPath = path.join(VCARDS_DIR, slug);
    const indexPath = path.join(folderPath, 'index.html');

    if (!fs.existsSync(indexPath)) {
        console.log(`[${slug}] Skipping: No index.html found.`);
        return;
    }

    console.log(`[${slug}] `);
    let html = fs.readFileSync(indexPath, 'utf8');
    let needsUpdate = false;

    // 1. Plumbing: Point to shared assets (all.min.css, style.css, js, etc.)
    // We look for patterns like 'href="assets/css/' or 'src="assets/js/'
    const assetPatterns = [
        { find: /href="assets\/css\//g, replace: `href="${SHARED_ASSETS_PATH}/css/` },
        { find: /src="assets\/js\//g, replace: `src="${SHARED_ASSETS_PATH}/js/` }
    ];

    assetPatterns.forEach(pattern => {
        if (pattern.find.test(html)) {
            html = html.replace(pattern.find, pattern.replace);
            needsUpdate = true;
        }
    });

    // 2. Metadata: Fix OG name mismatch if needed
    // Typically vCards use some other profile's name as a base.
    // We try to pull the current profile's name from the <h1>.
    const h1Match = html.match(/<h1>(.*?)<\/h1>/);
    if (h1Match) {
        const profileName = h1Match[1].trim();
        const ogTitleRegex = /property="og:title" content="(.*?)"/;
        const ogMatch = html.match(ogTitleRegex);
        
        if (ogMatch && !ogMatch[1].includes(profileName)) {
            console.log(`   - Updating metadata for: ${profileName}`);
            html = html.replace(ogTitleRegex, `property="og:title" content="${profileName} | Digital V-Card | AUREOLE PHARMA PVT. LTD."`);
            needsUpdate = true;
        }
    }

    // 2.5. Phone cleanup: strip spaces in the contact object for vcard download
    const phoneRegex = /(phone:\s*")([^"]+)(")/g;
    if (phoneRegex.test(html)) {
        html = html.replace(phoneRegex, (match, p1, p2, p3) => {
            const strippedPhone = p2.replace(/\s+/g, '');
            if (p2 !== strippedPhone) {
                console.log(`   - Stripping spaces from contact phone: ${p2} -> ${strippedPhone}`);
                needsUpdate = true;
            }
            return p1 + strippedPhone + p3;
        });
    }

    // 3. Save modified HTML
    if (needsUpdate) {
        fs.writeFileSync(indexPath, html);
        console.log(`   - √ index.html updated.`);
    }

    // 4. Cleanup: Delete local redundant assets (css/js) to save space
    const localCss = path.join(folderPath, 'assets/css');
    const localJs = path.join(folderPath, 'assets/js');
    
    if (fs.existsSync(localCss)) {
        deleteFolderRecursive(localCss);
        console.log(`   - Removed redundant CSS.`);
    }
    if (fs.existsSync(localJs)) {
        deleteFolderRecursive(localJs);
        console.log(`   - Removed redundant JS.`);
    }

    // 5. Registration: Add to vcard_urls.txt if missing
    if (!urlsContent.includes(slug)) {
        const urlBlock = `  <url>\n    <loc>${SITE_URL_BASE}${slug}/</loc>\n  </url>\n`;
        urlsContent += urlBlock;
        urlsModified = true;
        console.log(`   - Registered in vcard_urls.txt.`);
    }

    console.log(`   Success!\n`);
});

// Finalize URL list
if (urlsModified) {
    fs.writeFileSync(URLS_FILE, urlsContent);
    console.log('New vCards have been registered in the site metadata.');
} else {
    console.log('No new vCards found to register.');
}

console.log('\nAll done! Your vCards are now integrated into the site.');
