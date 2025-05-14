const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agenda'
});

connection.connect(err => {
    if (err) throw err;
    console.log ('Conectando ao MySQL');
});

module.exports = connection;