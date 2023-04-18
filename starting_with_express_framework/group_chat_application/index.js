const express = require("express"); // inporting express module
const app = express(); // initailizing express app
const fs = require("fs"); // importing the node file system module
const port = 4001; // declaring the port number
// importing the express routes
const userRouter = require("./routes/user");
const messageRouter = require("./routes/messge");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//handeling the user routes
app.use("/user", userRouter);
// handeling the messgae routes
app.use("/user-message", messageRouter);
// handeling the home routes
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
// handeling the page not found routes
app.use("*", (req, res, next) => {
  res.status(404).send("<h1>OOpsss!! Page Not Found</h1>");
});
// starting the server
app.listen(port, (error) => {
  if (error) console.log(error);
  else console.log(`listening on http://localhost:${port}`);
});
