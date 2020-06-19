const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove,
  findById,
  findPhotos
}


function findPhotos (id){
  return db('photos')
    .where({stories_id: id});

}
function findById(id) {
  return db("stories").where({ id }).first();
}

function add(storyData){
  return db('stories')
    .insert(storyData);
}

function update(changes, id){
  return db('stories')
    .where({id})
    .update(changes);
}

function remove(id){
  return db('stories')
  .delete()
  .where({id});
}
