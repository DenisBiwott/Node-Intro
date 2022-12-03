const http = require('http');
const path = require('path');
const fs = require('fs');

// Server stuff here...
server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'),
  //     'utf-8',
  //     (error, content) => {
  //       if (error) throw error;
  //       console.log(content);
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === '/about') {
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'about.html'),
  //     'utf-8',
  //     (error, content) => {
  //       if (error) throw error;
  //       res.end(content);
  //     }
  //   );
  // }

  //Build File Path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Get file extension
  let extName = path.extname(filePath);

  // Default content type
  let contentType = 'text/html';

  // Check and set content type based on extension
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == 'text/html' && extName == '') filePath += '.html';

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 9999;
server.listen(PORT, () =>
  console.log(`Server running... on http://localhost:${PORT}`)
);
