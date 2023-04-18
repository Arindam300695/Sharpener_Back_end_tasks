const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const contactRouter = express.Router();
contactRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});
contactRouter.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});
module.exports = contactRouter;
