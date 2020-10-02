const fs = require('fs');
const path = require('path');

class FileSystem extends fs {
    constructor() {
        super();
    }

    createDirectory(dirName = '') {
        if(dirName) {

        }
        else {

        }
    },

}

module.exports = FileSystem;
//create directory
var dirName = path.join(path.dirname(__filename),'test1');
var myFileName = path.join(dirName,'testFile.txt');

if(fs.existsSync(dirName)) {
    console.log("directory already exist");
}
else {
    fs.mkdir(dirName, {}, err => {
        if(err) throw err;
        console.log("Directory created");
    });
}
var content = "Hello world...";
var appendContent = "Welcome to Node world :) ";

// Create a file inside above directory and write to the file.
fs.writeFileSync(myFileName, content, err => {
    if (err) throw err;
    console.log("File write done..")
});

// Append content to the created file.
fs.appendFile(myFileName, appendContent, err => {
    if (err) throw err;
    console.log("File Append done..")
});

// Read file.
fs.readFile(myFileName, 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data)
});

//delete file.
try {
    fs.unlinkSync(myFileName);
    console.log(`successfully deleted ${myFileName}`);
} catch (err) {
    console.log(err);
}