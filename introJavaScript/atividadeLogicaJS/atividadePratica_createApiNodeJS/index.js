const http = require("http");
const data = require("./source");

http
  .createServer((req, res) => {
    res.writeHead(400); //trying out different status
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3000);
