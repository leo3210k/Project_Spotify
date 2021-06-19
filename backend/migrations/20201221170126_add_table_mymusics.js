
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('mymusics', table => {
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('musicId').references('id')
            .inTable('musics').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('mymusics', table => {
        table.dropColumn('userId')
        table.dropColumn('musicId')
    })
};
