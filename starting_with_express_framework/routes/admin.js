const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='message'/>Product Name  <input type='number' name='size'/>Product Size<button type='submit'>Send</button></form>"
  );
});
adminRouter.post("/product", (req, res, next) => {
  console.log(
    "product name is:",
    req.body.message,
    "and size is:",
    req.body.size
  );
  res.redirect("/shop");
});
module.exports = adminRouter;
