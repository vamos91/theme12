const mysql = require('mysql2')
const fs = require('fs')
const tables = ['artist', 'artwork', 'gallery']

try {
    const cnx = mysql.createConnection({
        user: 'root',
        password: 'acard',
        port: 3306,
        database: 'gallery',
        host: 'localhost'
    })
    console.log('Vous êtes connecté à la DB')

    tables.forEach((table) => {
        cnx.query(`select * from ${table}`, (err, result) => {
            if (!err) {
                fs.writeFile(`./seed/data/${table}.json`, JSON.stringify(result, null, 4), "utf8", (err) => {
                    if(err){
                        console.log('error', err)
                    }else{
                        console.log(`${table} file created...`)
                    }
                })
            }
        })
    });
    
} catch (err) {
    console.log(err)
}