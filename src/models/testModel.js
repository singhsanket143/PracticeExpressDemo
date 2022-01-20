const sqlConnection = require('../services/sqlConnection');

function testModelFunction(data, cb) {
    var sql = ` INSERT INTO test 
                (count) Values (?)`;
    var values = []
    values.push(data.count);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        cb(err, result);
    })
}

module.exports = {testModelFunction};