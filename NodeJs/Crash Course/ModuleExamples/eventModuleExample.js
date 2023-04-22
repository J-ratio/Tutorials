EventEmitterindex = require("events");

class MyEventEmmiter extends EventEmitter {}

const myEventEmmiter = new MyEventEmmiter();

//Listener
myEventEmmiter.on("log", () => console.log("logging..."));

//Event emit
myEventEmmiter.emit("log");
