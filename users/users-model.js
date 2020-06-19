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
