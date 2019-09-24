exports.seed = function(knex) {
  return knex('pictures').insert([
    { url: "https://i.ibb.co/pyzv4Tc/birthday-cake.jpg",
      party_id: 1
    },
    { url: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      party_id: 1
    }
  ]);
};

