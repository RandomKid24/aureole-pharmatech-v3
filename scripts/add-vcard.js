const fs = require('fs');
const path = require('path');

// Simple command line arguments parser
const args = process.argv.slice(2);
const options = {};
args.forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        options[key.replace('--', '')] = value;
    }
});

const { slug, name, designation, email, phone, whatsapp, linkedin } = options;

if (!slug || !name || !designation || !email || !phone) {
    console.log('Usage: node scripts/add-vcard.js --slug="vijay-mahajan" --name="Mr. Vijay Mahajan" --designation="Designation" --email="email@example.com" --phone="+91 00000 00000" [--whatsapp="910000000000"] [--linkedin="https://..."]');
    process.exit(1);
}

const vcardsDir = path.join(__dirname, '../public/vcards-2026');
const newVCardDir = path.join(vcardsDir, slug);
const templateSlug = 'ramprasad-bairagi'; // Using this as the gold standard template
const templateDir = path.join(vcardsDir, templateSlug);

console.log(`Creating vCard for ${name} in ${newVCardDir}...`);

if (!fs.existsSync(newVCardDir)) {
    fs.mkdirSync(newVCardDir, { recursive: true });
}

// Helper to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            // Don't overwrite index.html if it exists (safety)
            if (entry.name === 'index.html' && fs.existsSync(destPath)) continue;
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copy assets but SKIP index.html for now
copyDir(templateDir, newVCardDir);

// Now generate the index.html from template
let html = fs.readFileSync(path.join(templateDir, 'index.html'), 'utf8');

// Update Titles and Meta Tags
html = html.replace(/<title>.*?<\/title>/, `<title>${name} | Aureole Pharma Tech Pvt. Ltd.</title>`);
html = html.replace(/property="og:title" content=".*?"/g, `property="og:title" content="${name} | Digital V-Card | AUREOLE PHARMA PVT. LTD."`);
html = html.replace(/property="og:image" content="https:\/\/aureolepharmatech\.com\/vcards\/.*?\/og-image\.jpg"/g, `property="og:image" content="https://aureolepharmatech.com/vcards/${slug}/og-image.jpg"`);
html = html.replace(/property="og:site_name" content=".*?"/g, `property="og:site_name" content="${name}, Digital V-Card"`);
html = html.replace(/property="og:description" content=".*?"/g, `property="og:description" content="${name} | Digital V-Card | AUREOLE PHARMA PVT. LTD."`);

// Update Profile Info
// We search for patterns in the template and replace them
html = html.replace(/<h1>Mr\. Ramprasad D\. Bairagi<\/h1>/g, `<h1>${name}</h1>`);
html = html.replace(/<p>HR Representative<\/p>/g, `<p>${designation}</p>`);
html = html.replace(/mailto:aos\.01@aureolepharmatech\.com/g, `mailto:${email}`);
html = html.replace(/>aos\.01@aureolepharmatech\.com<\/a>/g, `>${email}</a>`);
html = html.replace(/tel:\+918600522230/g, `tel:${phone.replace(/\s+/g, '')}`);
html = html.replace(/>\+91 86005 22230<\/a>/g, `>${phone}</a>`);

// Update WhatsApp Link
if (whatsapp) {
    html = html.replace(/\+918600522230/g, whatsapp);
    html = html.replace(/Hello%2C%20Mr\.%20Ramprasad%20Dattaram%20Bairagi/g, `Hello%2C%20Mr.%20${encodeURIComponent(name.replace('Mr. ', ''))}`);
}

// Update LinkedIn Link
if (linkedin) {
    html = html.replace(/https:\/\/www\.linkedin\.com\/in\/ramprasad-bairagi-053389361\?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/g, linkedin);
}

// Update vCard script (the logic that generates the .vcf download)
html = html.replace(/name: "Mr. Ramprasad Dattaram Bairagi"/g, `name: "${name}"`);
html = html.replace(/phone: "\+918600522230"/g, `phone: "${phone.replace(/\s+/g, '')}"`);
html = html.replace(/email: "aos\.01@aureolepharmatech\.com"/g, `email: "${email}"`);

// Write the final index.html
fs.writeFileSync(path.join(newVCardDir, 'index.html'), html);

// Update vcard_urls.txt
const urlsPath = path.join(__dirname, '../vcard_urls.txt');
let urls = fs.readFileSync(urlsPath, 'utf8');
if (!urls.includes(`/vcards/${slug}/`)) {
    urls += `  <url>\n    <loc>https://www.aureolepharmatech.com/vcards/${slug}/</loc>\n  </url>\n`;
    fs.writeFileSync(urlsPath, urls);
}

console.log(`Successfully created vCard for ${name}!`);
console.log(`Don't forget to replace the profile image and og-image in ${newVCardDir}/assets/images/`);
