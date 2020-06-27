module.exports = {
  
    development: {
      client: 'pg',
      connection: {
        host : 'docker-db',
        user : 'postgres',
        password : 'mysecretpassword',
        database : 'suflexdb'
        },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './src/config/migrations'
      },
      seeds:{
        directory: './src/config/seeds'
      }
    },
  
  };