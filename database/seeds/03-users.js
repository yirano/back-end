
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, User_name: 'jshehane1', Password: "abc123password"},
        {id: 2, User_name: 'kmilliner1', Password: "pa$$word456"},
        {id: 3, User_name: 'janedoe3', Password: "987yaypassword"}
      ]);
    });
};
