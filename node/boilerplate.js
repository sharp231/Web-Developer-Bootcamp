const fs = require('node:fs');
const dirName = process.argv[2] || 'Project';

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('コールバックの中だよ');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, '');
    fs.writeFileSync(`${dirName}/app.js`, '');
    fs.writeFileSync(`${dirName}/styles.css`, '');
} catch (e) {
    console.log('エラーだよ');
    console.log(e);
}