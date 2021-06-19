
exports.up = function (knex, Promise) {
    return knex.schema.createTable('musics', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('imageUrl', 1000)
        table.binary('content').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('musics')
};
