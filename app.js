const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 8080;
const ip = '127.0.0.1';

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Invalid endpoint.');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, ip, () => {
  console.log('\nServer started on ' + ip + ':' + port + '\n');
});
