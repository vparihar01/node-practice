var http = require("http");
var fs = require("fs");


var server = http.createServer();


//##### Printing the request data to server console #####//
server.on("request",function(request,response){
	response.writeHead(200);
	request.on("data",function(chunk){
		console.log(chunk.toString());
	});
	request.on("end",function(){
		response.end();
	});
}).listen(8080);


//##### Printin back request data to as reponse on browser#####//
server.on("request", function(request, response){
	console.log("I am inside the reposnse.write");
	response.writeHead(200);
	request.on('data',function(chunk){	
		response.write("writing back data using the write" + chunk + "\n");
	});
	request.on('end', function(){
		response.end();
	});
 }).listen(8080);

//##### Printin back request data to as reponse on browser using the pipe#####//
server.on("request",function(request,response){
	console.log("I am inside the request.pise");
	response.writeHead(200);
	request.pipe(response);
	request.on('end', function(){
		response.end();
	});
}).listen(8080);

 server.on("close",function(){
 
 });