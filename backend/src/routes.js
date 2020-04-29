const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const CompanyProfileController = require('./controllers/CompanyProfileController');
const JobController = require('./controllers/JobController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.get('/company', CompanyController.index);
routes.post('/company', CompanyController.create);

routes.get('/company/jobs', CompanyProfileController.index);

routes.get('/job', JobController.index);
routes.post('/job', JobController.create);
routes.delete('/job/:id', JobController.delete);

module.exports = routes;
