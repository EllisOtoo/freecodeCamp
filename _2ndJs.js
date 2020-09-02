let events = require('events');

let oneEmitter = new events.EventEmitter();

oneEmitter.on('test', logSth) // Handler
oneEmitter.emit('test'); // Emit event


function logSth() {
    console.log('Im a handler')
}



console.log('2ndJs Run')