const express = require('express');
const routes = require('./routes');

const app = express();
app.set('base', '/api');
// automatically converts every requisition body to json
app.use(express.json());
app.use('/api', routes);

app.listen(3333);

console.log('listening on port 3333');
