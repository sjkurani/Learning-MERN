const http = require('http');
const fs = require('fs');
const path = require('path');
const Logger = require('./logger');

const myLogger = new Logger();

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("<h1>My Home page from index.js</h1>");
    }
});
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => myLogger.log(`server running on ${PORT}`));