const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    test: 'json',
    anotherTest: 'yeah',
  });
});

app.listen(3333);

console.log('listening on port 3333');
