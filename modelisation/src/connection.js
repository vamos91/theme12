const mysql = require('mysql2')
let cnx;
try {
    cnx = mysql.createConnection({
        host: 'pma-sandbox.alt-tools.tech',
        user: 'root',
        password: 'WEAR9PfLPAd',
        port: 3306,
        database: 'theme_12',
    })
    console.log('Vous êtes connecté à la DB')
} catch (error) {
    console.log(err)
}

module.exports = cnx