const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(express.urlencoded());
app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='message'/>Product Name  <input type='number' name='size'/>Product Size<button type='submit'>Send</button></form>"
  );
});
app.use("/product", (req, res, next) => {
  console.log(
    "product name is:",
    req.body.message,
    "and size is:",
    req.body.size
  );
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Express!</h1>");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`listening on port http://localhost:${PORT}`);
});
