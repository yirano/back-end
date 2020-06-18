const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove
}



function add(userData){
  return db('users')
    .insert(userData);
}

function update(changes, id){
  return db('photos')
    .where({id})
    .update(changes);

}

function remove(id){
  return db('photos')
  .delete()
  .where({id});
}
