const mysql = require('mysql');

const con = mysql.createConnection( {
    host:'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

con.connect(function (err){
    if(err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Highway 37'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});