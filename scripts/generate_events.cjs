const fs = require('fs');
const path = require('path');

const basePath = path.join('c:', 'projects', 'aureole-pharmatech-v3', 'public', 'events');

const result = {
    exhibitions: [],
    companyEvents: [],
    galleries: {}
};

function processFolder(folderType) {
    const dirPath = path.join(basePath, folderType);
    if (!fs.existsSync(dirPath)) return;
    
    const folders = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const folder of folders) {
        const folderPath = path.join(dirPath, folder);
        const files = fs.readdirSync(folderPath).filter(f => !f.startsWith('.'));
        
        if (files.length > 0) {
            const relFolderPath = `/events/${folderType}/${folder}`;
            result.galleries[relFolderPath] = files;
            
            const eventObj = {
                title: folder,
                date: "2024/2025/2026", // Placeholder
                location: "VARIOUS LOCATIONS", // Placeholder
                description: "Description pending.", // Placeholder
                thumbnail: `${relFolderPath}/${files[0]}`,
                folderPath: relFolderPath,
                type: folderType === 'exhibitions' ? 'exhibition' : 'company'
            };
            
            if (folderType === 'exhibitions') {
                result.exhibitions.push(eventObj);
            } else {
                result.companyEvents.push(eventObj);
            }
        }
    }
}

processFolder('exhibitions');
processFolder('company-events');

fs.writeFileSync(path.join('c:', 'projects', 'aureole-pharmatech-v3', 'events_data.json'), JSON.stringify(result, null, 2));
console.log('Done');
