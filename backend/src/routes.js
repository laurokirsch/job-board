const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const CompanyProfileController = require('./controllers/CompanyProfileController');
const JobController = require('./controllers/JobController');
const SessionController = require('./controllers/SessionController');
const { join } = require('./database/connection');

routes.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  SessionController.create
);

routes.get('/company', CompanyController.index);

routes.post(
  '/company',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      country: Joi.string().required(),
      city: Joi.string().required(),
      website: Joi.string().required(),
    }),
  }),
  CompanyController.create
);

routes.get(
  '/company/jobs',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  CompanyProfileController.index
);

routes.get(
  '/job',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  JobController.index
);
routes.post(
  '/job',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.string().required(),
      remote: Joi.bool().required(),
    }),
  }),
  JobController.create
);
routes.delete(
  '/job/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  JobController.delete
);

module.exports = routes;
