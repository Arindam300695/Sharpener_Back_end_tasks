const express = require("express");
const userRouter = express.Router();
const localStorage = require("localStorage");
let usr;
userRouter.get("/login", (req, res, next) => {
  res
    .status(200)
    .send(
      "<form action='/user/message' method='POST'><input name='user'/>User Name<button>Login</button></form>"
    );
});
userRouter.post("/message", (req, res, next) => {
  const user = req.body.user;
  localStorage.setItem("usr", user);
  res.redirect("/user-message/send-message");
});
module.exports = userRouter;
