const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.set('base', '/api');
app.use(cors());
app.use(express.json()); // automatically converts every requisition body to json
app.use('/api', routes);

app.listen(3333);
