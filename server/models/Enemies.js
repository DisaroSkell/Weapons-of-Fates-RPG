const client = require("../db")

function createEnemy(name, health_max) {
    return new Promise((resolve, reject) => {
        var values = [name, health_max]
        let sql = `insert into enemies (namee,healthe_max) values ($1, $2);`
        client.query(sql, values, (err,result) => {
            if (err) {
                return console.error(err.message)
            }

            resolve(result)
        })
    })
}