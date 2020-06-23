const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove,
  findById
}


function add(photoData){
  return db('photos')
    .insert(photoData);
}

function update(changes, id){
  return db('photos')
    .where({id})
    .update(changes);

}
function findById(id) {
  return db("photos").where({ id }).first();
}

function remove(id){
  return db('photos')
  .delete()
  .where({id});
}
