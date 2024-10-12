const express = require("express");

const router = express.Router();
const errorController = require('../controllers/error')
// error handling
router.use(errorController.getError);

module.exports = router;

