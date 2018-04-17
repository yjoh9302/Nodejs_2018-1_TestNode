
// console.log('Hello, world!');
// const circle = require('./circle');
// console.log('Area of a circle = ' + circle.area(3));
// console.log('Circumference of a circle = ' + circle.circum(3));
// console.log('Pi = ' +circle.pi);

// const square = require('./square');
// let mySquare = square(5);
// mySquare.width = 10;
// console.log('Area of a square = ' + mySquare.area());
// console.log('Circumference of a square = ' + mySquare.circum());

// const os = require('os');
// console.log(os.type());
// console.log(os.cpus());

// 서버
// const http = require('http');
// function onReaquest(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write('Hello, world');
//     res.end();
// }
// let server = http.createServer(onReaquest) ;
// server.listen(8000, 'localhost');
// console.log('Server is running at lacalhost:8080');

let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer');
myServer.start(nPort, sHost);