module.exports = {
  
    development: {
      client: 'pg',
      connection: {
        host : '192.168.27.254',
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
      }
    },
  
  };