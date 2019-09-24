exports.seed = function(knex) {
  return knex('todo_lists').insert([
    { task: "Shopping", party_id: 1 },
    { task: "Invite Jasmine's frinds", party_id: 1 },
    { task: "Decorate", party_id: 1 },
  ]);
};