const fs = require('fs');
const mp4 = './lagu.mp4';
const advices = './advices.txt';
const http = require('http');

const readStream = fs.createReadStream(advices);
const writeStream = fs.createWriteStream('./dan.mp4');

// readStream.on('data', (chunk) => {
// 	console.log(chunk);
// });

// readStream.on('end', () => {
// 	console.log('Tamat');
// });

// readStream.on('error', (err) => console.log(err));

http
	.createServer((req, res) => {
		readStream
			.on('data', (data) => {
				res.writeHead(200, {});
				console.log(data);
				res.end(data);
			})
			.on('end', () => {
				console.log('Tamat');
			})
			.on('error', (err) => {
				console.log(err);
			});
	})
	.listen(3000, () => console.log('Listening'));
