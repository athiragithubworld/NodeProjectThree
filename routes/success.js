const express = require("express");
const path = require("path");

const router = express.Router();

// error handling
router.use((req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../", "views", "success.html"));
});

module.exports = router;
