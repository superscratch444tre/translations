const fs = require('fs');

const fileName = process.argv[2];
const fileContent = fs.readFileSync(fileName, 'utf8');
const lines = fileContent.split('\n');
let valid = true;
let currentFile = '?';

for (var i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (!line.startsWith('+') && !line.startsWith('-')) {
    continue;
  }
  if (line.startsWith('+++') || line.startsWith('---')) {
    currentFile = line.substr(6);
    continue;
  }
  if (line.includes('tw.')) {
    console.error(`${currentFile} unexpectedly changed translation ID`);
    valid = false;
  } else if (line.includes('englishMessage:')) {
    console.error(`${currentFile} unexpectedly changed english message`);
    valid = false;
  } else if (line.includes('description:')) {
    console.error(`${currentFile} unexpectedly changed description`);
    valid = false
  }
}

if (!valid) {
  process.exit(1);
}
