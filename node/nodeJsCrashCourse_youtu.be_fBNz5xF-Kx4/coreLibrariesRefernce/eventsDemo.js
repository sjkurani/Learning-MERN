const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter{
    log(data) {
        this.emit("event", data);
    }
}

//Init object
const myEmitter = new MyEmitter();
//Event Listner
myEmitter.on('event', (data) => {
    console.log(data);
})

myEmitter.log("Log function called on event emitter...");

