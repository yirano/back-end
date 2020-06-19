const db = require('../data/db-config.js');

module.exports = {
  add,
  update,
  remove
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

function remove(id){
  return db('photos')
  .delete()
  .where({id});
}
