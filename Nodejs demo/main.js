const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a log file
const logFile = fs.createWriteStream('request.log', { flags: 'a' });

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log request details
  logRequest(req);

  // Handle routing for different paths
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the home page!');
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the about page!');
      break;
    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the contact page!');
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found!');
  }
});

// Log request details
function logRequest(req) {
  const logEntry = `${new Date().toISOString()}: ${req.method} ${req.url} ${req.headers['user-agent']}\n`;
  logFile.write(logEntry);
}

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});