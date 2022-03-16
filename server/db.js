const fs = require('fs')
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

const sql_create = fs.readFile(__dirname + "/tables.sql", function (err, data) {
    if (err) {
        return console.error(err.message);
    }
    else {
        client.query(data.toString(), [], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Tables successfully created");
        });
    }
});

/*const sql_fill = fs.readFile(__dirname + "/fill.sql", function (err, data) {
    if (err) {
        return console.error(err.message);
    }
    else {
        client.query(data.toString(), [], (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Tables successfully filled");
        });
    }
});*/

module.exports = client