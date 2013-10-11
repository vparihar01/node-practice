var http = require("http");

http.createServer(function(request,response){
	response.writeHead(200);
	response.write("Hello i m writing the program");
	console.log(resonse);
	console.log(request);
	response.end();
}).listen(8080);

var fs = require("fs");
