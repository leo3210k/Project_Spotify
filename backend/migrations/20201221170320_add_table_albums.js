
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('albums', table => {
        table.integer('artistId').references('id')
            .inTable('artists').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('albums', table => {
        table.dropColumn('artistId')
    })
};
