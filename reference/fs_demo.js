const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
  if (err) throw err;
});

// Create and write to file
fs.writeFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'Hello World!',
  (err) => {
    if (err) throw err;
  }
);

// Append to file
fs.appendFile(
  path.join(__dirname, 'test', 'hello.txt'),
  ' Every little is gonna be alright.',
  (err) => {
    if (err) throw err;
  }
);

// Read file
fs.readFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'utf-8',
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

// Rename file
fs.rename(
  // Current name
  path.join(__dirname, 'test', 'renamed.txt'),
  // To be renamed to..
  path.join(__dirname, 'test', 'hello.txt'),
  (error) => {
    if (error) throw error;
    console.log('Renamed');
  }
);
