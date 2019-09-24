exports.seed = function(knex) {
    return knex('parties').insert([
     { 
       party_name: "Jasmine's 5 year old birthday", 
       guests: 15, 
       theme: "Princess", 
       date: "10/10/2019", 
       budget: "$500",
       category_id: 1
      } 
    ]);
  };