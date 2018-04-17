const http = require('http');
const url = require('url');

function start(port, hostname, route, handle) {
    function onReaquest(req, res){
        let sPathname = url.parse(req.url).pathname;
        let content = route(sPathname, handle);
        console.log('url = ' + req.url);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(content);
        res.end();
    }

    http.createServer(onReaquest).listen(port, hostname);
    console.log('Server is running at ' +hostname + port);
}
exports.start = start;
