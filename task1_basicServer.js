/*
Problem Statement - Basic Node.js Server 
Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!" for all incoming HTTP requests.
*/

const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
