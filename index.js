const fs = require('fs');

// const data = fs.readFileSync(__dirname + '/data.txt', 'utf8');
// console.log(data);

// const data2 = fs.readFile(
// 	__dirname + '/data.txt',
// 	'utf8',
// 	function (err, data) {
// 		console.log('Async Read:', data);
// 	}
// );
// console.log('Data2', data2);

const readableStream = fs.createReadStream(__dirname + '/data.txt', {
	encoding: 'utf8',
});

const writableStream = fs.createWriteStream(__dirname + '/data2.txt');
const second = fs.createWriteStream(__dirname + '/data3.txt');
const four = fs.createWriteStream(__dirname + '/data4.txt');

readableStream.on('data', function (dataChunk) {
	console.log('Data Chunk Received');
	writableStream.write(dataChunk);
});

readableStream.pipe(second);
readableStream.pipe(four);
