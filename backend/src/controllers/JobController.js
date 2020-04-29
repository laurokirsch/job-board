const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const jobs = await connection('job').select('*');
    return res.json({ jobs });
  },
  async create(req, res) {
    const { title, description, tags, remote } = req.body;
    const company_id = req.headers.authorization;

    const result = await connection('job').insert({
      title,
      description,
      tags,
      remote,
      company_id,
    });

    const id = result[0];

    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const company_id = req.headers.authorization;

    const jobToDelete = await connection('job')
      .where('id', id)
      .select('company_id')
      .first();

    if (jobToDelete.company_id !== company_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('job').where('id', id).delete();

    return res.status(204).send();
  },
};
