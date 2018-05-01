const http = require('http');
const url = require('url');

function start(port, hostname, route, handle) {
    function onReaquest(req, res){
        let sPathname = url.parse(req.url).pathname;
        route(sPathname, handle, res);
        
    }

    http.createServer(onReaquest).listen(port, hostname);//콜백
    console.log('Server is running at ' +hostname + port);
}
exports.start = start;
