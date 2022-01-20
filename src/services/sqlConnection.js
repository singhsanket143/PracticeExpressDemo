const mysql = require('mysql2');
var pool      =    mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "testdb"
});    
function executeQuery(sql, data, callBack) {
    pool.getConnection(function(err, connection) {
        if(err) {
            callBack(err);
        }
        else {
            connection.query(sql, data, function(err1, result) {
                connection.release();
                callBack(err1, result);
            })
        }
    })
}

module.exports = {executeQuery};