const db = require('../database/knex-setup.js');

module.exports = {
  add,
  update,
  remove,
  findStories,
  findBy,
  findById
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

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  }
  catch (error) {
    throw error;
  }
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
