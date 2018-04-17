const http = require('http');

function start(port, hostname) {
    function onReaquest(req, res){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }

    http.createServer(onReaquest).listen(port, hostname);
    console.log('Server is running at ' +hostname + port);
}
exports.start = start;
