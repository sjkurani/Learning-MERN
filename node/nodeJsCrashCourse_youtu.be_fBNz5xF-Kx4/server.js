const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    /*console.log(req);
    console.log(res);*/
    if(req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(content);
            }
        );
    }
    if(req.url === '/about') {
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                if (err) throw err;
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(content);
            }
        );
    }
    if(req.url === '/api/users') {
        const users = [
            {name : "sjk"},
            {name : "shri"},
        ];
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(users));
    }
});
const PORT = process.env.PORT || 2000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));