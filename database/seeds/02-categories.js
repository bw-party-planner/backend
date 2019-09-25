exports.seed = function(knex) {
  return knex('categories').insert([
    {category: 'Birthday Party'}, //1
    {category: 'Dinner Party'}, //2
    {category: 'Garden party'}, //3
    {category: 'Halloween Party'}, //4
    {category: 'Bachelor Party'}, //5
  ]);
};

