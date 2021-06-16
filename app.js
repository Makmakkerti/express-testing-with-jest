const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Testing app');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Test server is running');
});
