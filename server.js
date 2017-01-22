var http = require('http'),
    server = http.createServer(),
    port = process.env.PORT || 3000;

function reply(req, res) {
  res.end('this is not a 404');
}

function running() {
  console.log('server running on ', port);
}

server.on('request', reply);
server.listen(port, running);
