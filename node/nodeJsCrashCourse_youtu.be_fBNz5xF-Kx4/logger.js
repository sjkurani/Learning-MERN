const EventsEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const config = require('./config');
var appBaseUri = config.appBaseUri;
var logDirName = path.join(appBaseUri, config.logDirName);
var logFileName = path.join(logDirName, config.logFileName);

class Logger extends EventsEmitter{
    constructor() {
        super();
        // fs.access is not recommended as we are trying to write log to the file directly.

        // Not required as the append creates the file if the file already not exist.
        /*fs.open(logFileName, 'a', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error(`Log File ${logFileName} is not present under directory ${logDirName}`);
                    return;
                }
                throw err;
            }
        });
        fs.open('logFileName', 'wx', (err, fd) => {
            if (err) {
                if (err.code === 'EEXIST') {
                    console.error('myfile already exists');
                    return;
                }
                throw err;
            }
        });*/
    }

    /*
    * @params
    * @desc get filePath,lineNumber,message from data array and add timestamp, id and then write everything to file.
    * */
    log(msg, type) {
        this.on('message', data => console.log(data));
        // Call Event.
        var timeStamp = new Date();
        var callerFileName = process.mainModule.filename;
        this.emit('message', {
            id: uuid.v4(), msg, timeStamp, callerFileName, type
        });

    }
}

module.exports = Logger;
