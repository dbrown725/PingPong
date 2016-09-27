var ws = require("nodejs-websocket")
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {
  parser: SerialPort.parsers.byteLength(8)
});
//var player = require('play-sound')(opts = {})

//create an array to hold your connections
var connections = [];

var server = ws.createServer(function (conn) {
    console.log("New connection")
	connections.push(conn);
    conn.on("text", function (str) {
        console.log("Received "+str)
        //conn.sendText(str.toUpperCase()+"!!!")
		//console.log("connections.server.key ", connections.server.key)
		for(var i = 0; i < connections.length; i++) {
			//connections[i].sendUTF(message.utf8Data);
			console.log("connections[i].server.key "+connections[i])
			connections[i].sendText(str.toUpperCase()+"!!!")
		}
		//player.play('applause6.mp3', function(err){}) // $ mplayer foo.mp3  
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001)

port.on('data', function (data) {
  console.log('Data: ' + data);
   for(var i = 0; i < connections.length; i++) {
  	console.log("connections[i].server.key "+connections[i])
   	connections[i].sendText(data)
   }
});
