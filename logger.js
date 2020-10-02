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
        this.on('message', data => {
            // console.log("Log added to file.")
        });
        var timeStamp = new Date();
        var callerFileName = process.mainModule.filename;
        var data = {id: uuid.v4(), msg: msg, timeStamp: timeStamp, filename : callerFileName, type : type};
        this.emit('message', {data});

        // Append to the log file.
        fs.open(logFileName, 'a', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error(`Log File ${logFileName} is not present.`);
                    return;
                }
                throw err;
            }
            fs.appendFile(fd, "\n" + JSON.stringify(data), 'utf8', (err) => {
                fs.close(fd, (err) => {
                    if (err) throw err;
                });
                if (err) throw err;
            });
        });

    }
}

module.exports = Logger;
