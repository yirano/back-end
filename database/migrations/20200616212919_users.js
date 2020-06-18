exports.up = function(knex) {
return knex.schema
.createTable('photos', photos => {
  photos.increments();
  photos
    .string('photo_url')
    .notNullable();
  photos
    .string('photo_title')
    .notNullable();
  photos
    .string('photo_description');

})
.createTable('stories', stories => {
  stories.increments();
  stories
    .string('story_name', 50)
    .notNullable();
  stories
    .string('story_description');

})
.createTable('stories_photos', pair => {
  pair.increments();
  pair
    .integer('story_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('stories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  pair
    .integer('photo_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('photos')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
})
.createTable('users', users => {
  users.increments();
  users
    .string('username', 255)
    .notNullable()
    .unique();
  users.string('password', 255)
    .notNullable();
})
.createTable('users_stories', pair => {
  pair.increments();
  pair
    .integer('story_id', 50)
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('stories')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  pair
    .integer('user_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users_stories')
    .dropTableIfExists('users')
    .dropTableIfExists('stories_photos')
    .dropTableIfExists('stories')
    .dropTableIfExists('photos');
};
