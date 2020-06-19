const db = require('../data/db-config.js');

module.exports = {
  add,
  update,
  remove
}


function findPhotos (id){
  return db('photos')
    .where({stories_id: id});

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
