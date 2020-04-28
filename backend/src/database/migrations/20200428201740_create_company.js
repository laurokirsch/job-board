exports.up = function (knex) {
  return knex.schema.createTable('company', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('country').notNullable();
    table.string('city').notNullable();
    table.string('website');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('company');
};
