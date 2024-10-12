const path = require("path");
const rootDir = require("../utils/path");

exports.getContactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactus = (req, res) => {
  console.log(req.body);
  res.redirect("/success");
};
