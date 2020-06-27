require('dotenv').config()

module.exports = {
  
    development: {
      client: 'pg',
      connection: {
        host : process.env.POSTGRES_HOST,
        user : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PASSWORD,
        database : process.env.POSTGRES_DB
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