
exports.up = function(knex) {
    return knex.schema.createTable('events', function(table){
        table.increments();
        table.datetime('date');
        table.string('description');
        
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return table.schema.dropTable('events')
};
