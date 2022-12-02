const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const { type } = require('os');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

const logger = new Logger();

function writeLogToFile(data) {
  console.log('Writing logs to file..');
  fs.writeFile(
    path.join(__dirname, 'reference', 'test', 'test_logs.txt'),
    data,
    (error) => {
      if (error) throw error;
    }
  );
  console.log('Logging DONE!');
}

logger.on('message', (data) => {
  // Convert Javascript object to string
  data = JSON.stringify(data);
  console.log(typeof data);
  writeLogToFile(data);
});
logger.log('Message to man');
