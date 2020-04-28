const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/company', async (req, res) => {
  const companies = await connection('company').select('*');

  return res.json(companies);
});

routes.post('/company', async (req, res) => {
  const { name, email, country, city, website } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('company').insert({
    id,
    name,
    email,
    country,
    city,
    website,
  });

  return res.json({ id });
});

module.exports = routes;
