const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);

module.exports = routes;
