const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.post('/company', (req, res) => {
  const { name, email, country, city, website } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  return res.json();
});

module.exports = routes;
