// upload file and save it
var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on("request",function(request, response){
	console.log("Going to read the file \n")
	var newFile = fs.createWriteStream("index-new.html");
	console.log("Read file data \n"+request.toString());
	request.pipe(newFile);
	request.on('end', function(){
		response.end('uploaded!!!');
	});
}).listen(8080);