const Logger = require('./logger');
const fs = require('fs');
const path = require('path');
const { type } = require('os');

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
  data = JSON.stringify(data);
  console.log(typeof data);
  writeLogToFile(data);
});
logger.log('Message to man');
