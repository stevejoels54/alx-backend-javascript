const http = require('http');
const countStudents = require('./3-read_file_async_return');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
