
exports.up = function (knex, Promise) {
    return knex.schema.createTable('albums', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('imageUrl', 1000)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('albums')
};
