var http = require('http');
var dte = require('./module/myModule.js');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("fdasdfsa"+dte.myDateTime());
  // var q= url.parse(req.url, true).query;
  fs.writeFile('./content.txt','Hello world', function(err){
    if(err) throw err;
  });
  res.end();
}).listen(8080);
