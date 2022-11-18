import http from 'http';
import url from 'url';
const port = 80;
const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(JSON.stringify({ query: { echo: url.parse(req.url, true).query.echo.toUpperCase() }}));
}

const server = http.createServer(requestListener);
server.listen(port);
console.log(`server start listening on ${port}`);