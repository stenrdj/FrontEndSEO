var http = require('http');
var fs = require('fs');
var dir = '~/Aziz/Desktop/Test';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

var server = http.createServer();
server.listen(8888);