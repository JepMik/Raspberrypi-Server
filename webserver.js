var http = require('http'); 
var url = require('url');
var fs = require('fs');

const port = 8080;
const hostname = '192.168.1.10'

console.log("Here2!")
const server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  //console.log(filename);
  //console.log(q);
  fs.readFile(filename, function(err, data) {
    console.log(filename);
    console.log(data);
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
