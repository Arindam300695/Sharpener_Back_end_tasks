const express = require("express");
const app = express();
const PORT = 4000;
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
app.use(express.json());
app.use(express.urlencoded());
app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use("/", (req, res, next) => {
  res.status(200).send("<h1>Hello from Express!!</h1>");
});
app.use("*", (req, res) => {
  res
    .status(404)
    .send(
      "<div style='margin:30% auto; width:25rem; text-align:center'><h1>oops!!Page not Found</h1></div>"
    );
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`listening on port http://localhost:${PORT}`);
});
