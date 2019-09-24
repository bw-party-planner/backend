exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { username: 'Ann', password: '123456'}
  ]);
};