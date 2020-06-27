const knex = require('knex');
const config = require('../../knexfile');

const db_connection = knex({
    client: 'pg',
    connection: {
        host : '192.168.27.254',
        user : 'postgres',
        password : 'mysecretpassword',
        database : 'suflexdb'
    }
  });

module.exports = db_connection