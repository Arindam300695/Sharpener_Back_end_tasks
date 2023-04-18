const express = require("express");
const path = require("path");
const app = express();
const rootDir = require("./util/path");
const PORT = 4000;
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactRouter = require("./routes/contactus");
const successRouter = require("./routes/success");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use("/contactus", contactRouter);
app.use("/success", successRouter);
app.get("/", (req, res, next) => {
  res.status(200).sendFile(path.join(rootDir, "views", "index.html"));
});
app.use("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`listening on port http://localhost:${PORT}`);
});
