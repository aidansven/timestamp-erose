var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  
  var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    var path = decodeURI(url.parse(req.url).path);
    
    var d = new Date(path);
    
    var stamp = {};
    
    stamp.unix = d.getTime();
    
    if (!stamp.unix) {
      stamp.natural = null;
    } else {
    stamp.natural = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }
    
    res.end(JSON.stringify(stamp));
    
});

server.listen(process.env.PORT, process.env.IP);