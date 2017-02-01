var http = require('http'),
    server = http.createServer(),
    url = require('url'),
    port = process.env.PORT || 3000;

function running() {
  console.log('server running on ', port);
}

server
  .on('request', function(req, res){
    var pathname = url.parse(req.url).pathname;
    
    // router
    if (pathname === '/') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('this is not a 404');
      
    } else if (pathname === '/users') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('here may be users one day');
      
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('this IS a 404');
    }
    
  }).listen(port, running);
