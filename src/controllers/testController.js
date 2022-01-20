const testModel = require('../models/testModel');
function testingGet(req, res) {
    res.send({message: "Testing get is working"});
}

function testingPost(req, res) {
    let data = req.body;
    console.log(data, req.body);
    testModel.testModelFunction(data, function(err, result) {
        if(err) {
            console.log(err);
            return res.status(500).send({message: "Not ok"});
        }
        res.status(200).send({message: "Testing post is working"})
    });
}

module.exports = {testingGet, testingPost};