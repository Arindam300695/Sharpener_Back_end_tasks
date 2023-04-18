const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const successRouter = express.Router();
successRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});
module.exports = successRouter;
