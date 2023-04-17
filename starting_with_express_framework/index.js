const express = require("express");
const app = express();
const PORT = 4000;
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Welcome to Express!</h1>");
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`listening on port http://localhost:${PORT}`);
});
