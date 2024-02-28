const express = require('express');
const countStudents = require('./3-read_file_async_return');

const app = express();
const host = '127.0.0.1';
const port = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DB_FILE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
