const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    // gets array first position
    const [count] = await connection('job').count();

    const jobs = await connection('job')
      .join('company', 'company.id', '=', 'job.company_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'job.*',
        'company.name',
        'company.country',
        'company.city',
        'company.email',
        'company.website',
      ]);

    // count value example: { 'count(*)': 15 }
    res.header('X-Total-Count', count['count(*)']);

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
