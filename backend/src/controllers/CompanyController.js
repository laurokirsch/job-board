const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const companies = await connection('company').select('*');

    return res.json(companies);
  },
  async create(req, res) {
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
  },
};
