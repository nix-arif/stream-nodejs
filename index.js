const fs = require('fs');

const readStream = fs.createReadStream('./lagu.mp4');
const writeStream = fs.createWriteStream('./dan.mp4');

readStream.pipe(writeStream);
