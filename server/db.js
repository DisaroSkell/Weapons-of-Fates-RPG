const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'wof_rpg',
  password: '1234',
  port: 5432,
})

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database " + client.database + "!");
})