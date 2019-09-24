exports.seed = function(knex) {
  return knex('categories').insert([
    {category: 'Birthday Party'}, //1
    {category: 'Dinner Party'}, //2
    {category: 'Garden party'}, //3
    {category: 'Helloween Party'}, //4
    {category: 'Bachelor Party'}, //5
  ]);
};

