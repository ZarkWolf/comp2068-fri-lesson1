// link to node's http library
var http = require('http');

// start a local web server om port 3000 and listen for events
http.createServer(function(request, response) {
  response.writeHead(200); // http status ok
  response.end('Our first node page');
}).listen(3000);

// print that the server has started
console.log('Server running on port 3000');
