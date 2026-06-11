const fs = require('fs');
const existingTs = fs.readFileSync('data/eventsData.ts', 'utf8');
const newData = require('../events_data.json');

const descRegex = /\"title\":\s*\"([^\"]+)\"[\s\S]*?\"description\":\s*\"([^\"]+)\"/g;
const descriptions = {};
let match;
while ((match = descRegex.exec(existingTs)) !== null) {
  descriptions[match[1]] = match[2];
}

for (const arr of [newData.exhibitions, newData.companyEvents]) {
  for (const item of arr) {
    if (descriptions[item.title] && descriptions[item.title] !== 'Description pending.') {
      item.description = descriptions[item.title];
    }
  }
}

let tsContent = `export interface EventMedia {
    title: string;
    date: string;
    location: string;
    description: string;
    thumbnail: string;
    folderPath: string;
    type: 'exhibition' | 'company';
}

`;

tsContent += 'export const EXHIBITIONS: EventMedia[] = ' + JSON.stringify(newData.exhibitions, null, 4) + ';\n\n';
tsContent += 'export const COMPANY_EVENTS: EventMedia[] = ' + JSON.stringify(newData.companyEvents, null, 4) + ';\n\n';

tsContent += 'export const GET_FOLDER_GALLERY = (folderPath: string) => {\n    const GALLERIES: Record<string, string[]> = ' + JSON.stringify(newData.galleries, null, 4) + ';\n    return GALLERIES[folderPath] || [];\n};\n';

fs.writeFileSync('data/eventsData.ts', tsContent);
console.log('Updated eventsData.ts');
