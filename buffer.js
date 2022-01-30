const fs = require('fs');
const http = require('http');
const file = './dan.mp4';

http
	.createServer((req, res) => {
		fs.readFile(file, (err, data) => {
			res.writeHead(200, { 'Content-Type': 'video/mp4' });
			res.end(data);
		});
	})
	.listen(3000, () => console.log('Listening on port 3000 for Buffer'));
