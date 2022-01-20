function testingGet(req, res) {
    res.send({message: "Testing get is working"});
}

function testingPost(req, res) {
    res.send({message: "Testing post is working"})
}

module.exports = {testingGet, testingPost};