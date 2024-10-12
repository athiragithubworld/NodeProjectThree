const express = require("express");


const router = express.Router();
const successController = require('../controllers/success')

// error handling
router.get("/success", successController.getSuccess);

module.exports = router;
