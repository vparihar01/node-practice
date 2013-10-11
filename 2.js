var http = require('http');
var fs = require('fs');

var callback = function(err, contents){
  console.log("I am going to write contenst to reponse");
  console.log(contents);
}

http.createServer(function(request, response) {
	response.writeHead(200 ,{'Content-Type': 'text/html'});
  fs.readFile("index.html",function(err, contents){
	  //response.write(contents);
	  response.end(contents);
	  chat.emit("message","heloooo why are you yelling ass*****");
  });
}).listen(8080);

console.log("Helloooo i m coming to you");


var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message',function(message){
  console.log(message);
});

var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.emit('join',"heloo i came to join hands, let play");
chat.emit('message', "heloo i am sending you one message");



var http = require('http');

//var server = http.createServer(function(request, response) {
	//});

//server.on("request",function(request,response){
  //response.writeHead(200);
  //response.write("Hello, this is dog");
  //response.end();
  //})
//server.listen(8080)
