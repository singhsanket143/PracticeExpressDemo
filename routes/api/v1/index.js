const express = require("express");
const router = express.Router();
const testController = require('../../../src/controllers/testController');



router.get("/test", testController.testingGet);
router.post("/test", testController.testingPost);

module.exports = router;
