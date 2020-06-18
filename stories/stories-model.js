const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove
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
