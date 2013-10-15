var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello this is vivek");
	response.end();
	console.log(response);
}).listen(8080);

var fs = require('fs');

var callback = function(err, contents){
	console.log("this is printing the content"+contents);
}
console.log(fs);
var contents = fs.readFile('helloworld.js',callback);




node-practice
This repository for practising my node skills .