var app = require('express')();
var server = require("http").Server(app);

server.listen(80);

var io = require("socket.io")(server);



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
	console.log("连上了")
  socket.emit('welcome', "弹幕");
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});