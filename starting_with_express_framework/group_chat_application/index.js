const express = require("express");
const app = express();
const fs = require("fs");
const port = 4001;
const userRouter = require("./routes/user");
const messageRouter = require("./routes/messge");
app.use(express.json());
app.use(express.urlencoded());
app.use("/user", userRouter);
app.use("/user-message", messageRouter);
app.get("/", (req, res, next) => {
  const usr = fs.readFileSync("./userMessage.txt", "utf-8");
  const user = JSON.parse(usr).user;
  const userMessage = JSON.parse(usr).userMessage;
  console.log(JSON.parse(usr));
  res
    .status(200)
    .send(
      `<h1>Welcome to my Group Chat Application</h1><p><span style='font-size:20px; color:purple'>${user}</span> send the message: <span style='font-size:20px; color:purple'>${userMessage}</span></p>`
    );
});
app.use("*", (req, res, next) => {
  res.status(404).send("<h1>OOpsss!! Page Not Found</h1>");
});
app.listen(port, (error) => {
  if (error) console.log(error);
  else console.log(`listening on http://localhost:${port}`);
});
