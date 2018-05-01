function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime()< timeStart + millisec);//new를 써야 초기화를 해준다?
}


function start(res) {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Hello, start!');
    res.end();
}

function hello(res) {
    //sleep(20000);//20초
    setTimeout(function () {//기다리는중에도 접근이 가능함

    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('Hello, hello!');
    res.end();
    }, 20000);
}


exports.start = start;
exports.hello = hello;