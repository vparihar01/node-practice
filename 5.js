// File Upload with prgress bar 

var http = require('http');
var fs = require('fs')

var server = http.createServer();

console.log("##### I m uploading file dude ###");

server.on("request",function(request,response){
	var newFile = fs.createWriteStream("data/test");
	console.log("Created the file");
	var fileBytes = request.headers['content-length'];
	console.log("#### Length of content is=>>>>"+fileBytes);
	
	var uploadedBytes = 0;
	
	request.pipe(newFile);
	request.on("data",function(chunk){
		console.log("I am getting the chunks of data \n");
		uploadedBytes += chunk.length;
		console.log("Chunck size =>>>"+chunk.length+"Uploaded Byted=>>>>"+uploadedBytes);
		var progress = (uploadedBytes/fileBytes) * 100
		console.log("Progress =>"+progress);
		response.write("Progress: " + parseInt(progress, 10) + "\n");
	});
	request.on("end",function(){
		response.end();
	});
}).listen(8080);