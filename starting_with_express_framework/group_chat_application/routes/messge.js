const express = require("express");
const fs = require("fs");

const messageRouter = express.Router();
const localStorage = require("localStorage");
messageRouter.get("/send-message", (req, res, next) => {
  res
    .status(200)
    .send(
      "<form action='/user-message/send-message' method='POST'><input name='msg'/>Enter Your Message<button>Send</button></form>"
    );
});
messageRouter.post("/send-message", (req, res, next) => {
  const msg = req.body.msg;
  localStorage.setItem("msg", msg);
  const userMessage = localStorage.getItem("msg");
  const user = localStorage.getItem("usr");
  const data = { user, userMessage };
  fs.writeFileSync("userMessage.txt", JSON.stringify(data));
  res.redirect("/");
});
module.exports = messageRouter;
