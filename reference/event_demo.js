const EventEmitter = require('events');

// Create class
class MyEmmiter extends EventEmitter {}

// Init object
const myEmitter = new MyEmmiter();

// Event listener
myEmitter.on('event', (x) => console.log('Event Fired!', x));

// Init event
myEmitter.emit('event', { msg: 'meow' });
