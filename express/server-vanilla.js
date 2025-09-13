const http = require("http");
    
// function requestListener(req, res) {
//   res.writeHead(200);
//   res.end("Hello, World!");
// }

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(8080);

// curl --location 'http://localhost:8080/'