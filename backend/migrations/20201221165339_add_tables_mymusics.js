
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('musics', table => {
        table.integer('artistId').references('id')
            .inTable('artists').notNull()
        table.integer('albumId').references('id')
            .inTable('albums')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('musics', table => {
        table.dropColumn('artistId')
        table.dropColumn('albumId')
    })
};
