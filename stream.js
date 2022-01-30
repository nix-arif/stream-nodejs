const http = require("http");
const fs = require("fs");
const file = "./dan.mp4";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "video/mp4" });
    fs.createReadStream(file)
      .pipe(res)
      .on("error", () => console.log("Error"));
  })
  .listen(3000, () => console.log("Server is listening for Stream"));
