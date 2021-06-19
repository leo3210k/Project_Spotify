
exports.up = function (knex, Promise) {
    return knex.schema.createTable('mymusics', table => {
        table.increments('id').primary()
        table.timestamp('addAt')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('mymusics')
};
