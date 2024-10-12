const path = require("path");
const rootDir = require("../utils/path");
exports.getSuccess = (req, res) => {
  res.status(200).sendFile(path.join(rootDir, "views", "success.html"));
};


