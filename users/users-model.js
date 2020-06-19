const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove
}


function findStories (id){
  return db('stories')
    .where({user_id: id});

}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db('users')
    .where({id})
    .first();
}

function add(userData){
  return db('users')
    .insert(userData);
}

function update(changes, id){
  return db('users')
    .where({id})
    .update(changes);

}

function remove(id){
  return db('users')
  .delete()
  .where({id});
}
