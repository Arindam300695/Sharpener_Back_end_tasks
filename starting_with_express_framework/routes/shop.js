const express = require("express");
const shopRouter = express.Router();
shopRouter.get("/", (req, res, next) => {
  res.send("<h1>Welcome to my Shop</h1>");
});
module.exports = shopRouter;
