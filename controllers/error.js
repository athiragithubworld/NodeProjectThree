const path = require("path");
const rootDir = require("../utils/path");


exports.getError = (req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};
