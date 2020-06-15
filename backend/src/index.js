const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.set('base', '/api');
app.use(cors());
app.use(errors());
app.use(express.json());
app.use('/api', routes);

app.listen(3333);
