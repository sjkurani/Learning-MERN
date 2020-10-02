const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    console.log(req.url);
    /*console.log(req.url);
    console.log(res);*/

//    Loading manually
/*    if(req.url === '/') {
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
    }*/
//    Loading automatically.

    // building file path.
    let filePath = path.join(__dirname, 'public', (req.url === '/') ? 'index.html': req.url);

    console.log(filePath);
    //getting extention name
    let extName = path.extname(filePath);

    // Content type
    let contentType ='text/html';
    switch (extName) {
        case '.html' : contentType = 'text/html';
            break;
        case '.css'  : contentType= 'text/css';
            break;
    }

    // read file with the extention and content type.
    fs.readFile(filePath, (err, content) => {
       if(err) {
           if(err.code === 'ENOENT') {
               fs.readFile(
                   path.join(__dirname, 'public', '404.html'),
                   (err, content) => {
                       if (err) throw err;
                       res.writeHead(404, {'Content-type': 'text/html'});
                       res.end(content, 'utf-8');
                   }
               );
           }
           else {
               res.writeHead(500);
               res.end(`server error with ${err.code}`);
           }
       } else {
           res.writeHead(200, {'Content-type': contentType});
           res.end(content, 'utf-8');
       }
    });
});
const PORT = process.env.PORT || 2000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));