const http = require('http');
const port = 9999;

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Hello World!');
    res.end();
  })
  .listen(port, () =>
    console.log(`Server running... on http://localhost:${port}`)
  );
