exports.seed = function(knex) {
  return knex('shopping_lists').insert([
    { item: "Cake", price: 50, party_id: 1 },
    { item: "Balloon", price: 10, party_id: 1 },
    { item: "Food", price: 150, party_id: 1 }
  ]);
};