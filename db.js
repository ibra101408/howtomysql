const mysql = require('mysql');

const con = mysql.createConnection( {
    host:'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
});

con.connect(function (err){
    if(err) throw err;
    var sql = "SELECT customers.name AS user, candy_name AS favorite FROM customers JOIN candy ON fav_candy = candy.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});


/**/