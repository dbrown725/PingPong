var ws = require("nodejs-websocket")
// Uncomment below lines to run with serial inputs,
// see futher below for another section that needs to be uncommented for serial to run
// var SerialPort = require('serialport');
// var port = new SerialPort('/dev/ttyUSB0', {
//   parser: SerialPort.parsers.byteLength(8)
// });

//create an array to hold your connections
var connections = [];

var server = ws.createServer(function (conn) {
    console.log("New connection")
	connections.push(conn);
    conn.on("text", function (str) {
        console.log("Received "+str)
		for(var i = 0; i < connections.length; i++) {
			console.log("connections[i].server.key "+connections[i])
			connections[i].sendText(str.toUpperCase())
		}
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
        console.log("connections.length before", connections.length)
        for(var i = 0; i < connections.length; i++) {
            if(connections[i] === this) {
                connections.splice(i, 1);
                break;
            }
        }
        console.log("connections.length after", connections.length)
    })
}).listen(8001)

// Uncomment below lines to run with serial inputs
// port.on('data', function (data) {
//   console.log('Data: ' + data);
//    for(var i = 0; i < connections.length; i++) {
//   	console.log("connections[i].server.key "+connections[i])
//    	connections[i].sendText(data)
//    }
// });
