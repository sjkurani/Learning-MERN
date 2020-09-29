const path = require('path');

//Full file name
console.log(__filename);

//Full Directory name
console.log(__dirname);

//filename
console.log(path.basename(__filename));

//dirname
console.log(path.dirname(__filename));

//extension

//parse
console.log(path.extname(__filename));

//parse
console.log(path.parse(__filename));

// concat
console.log(path.join(path.parse(__filename).dir, "sjk","index.js"));
