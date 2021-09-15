var http = require('http');
var server = http.createServer(function(req, res){
    // console.log('request was made:' + req.url);  we add to request when wrote on url web.
    
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hey your are my world...!');
});

server.listen(3000, '127.0.0.1');
console.log('You are, now listening to port 3000');
