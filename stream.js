const fs = require("fs");
const http = require("http");
const file = "./dan.mp4";
http
  .createServer((req, res) => {
    const readStream = fs.createReadStream(file);
    res.writeHead(200, { "Content-Type": "video/mp4" });
    readStream.pipe(res);
  })
  .listen(3000, () => console.log("Stream - http://localhost:3000"));
