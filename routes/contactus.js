const express = require("express");


const router = express.Router();
const contactusController = require('../controllers/contactus')

router.get("/contactus", contactusController.getContactus);

router.post("/success", contactusController.postContactus );

module.exports = router;
