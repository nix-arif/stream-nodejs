const fs = require("fs");
const http = require("http");
const file = "./dan.mp4";

http
  .createServer((req, res) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.log("hmmmmm", error);
      }
      res.writeHead(200, { "Content-Type": "video/mp4" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("buffer - http://localhost:3000"));
