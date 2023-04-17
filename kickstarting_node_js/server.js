const http = require("http");
const PORT = 4000;
const routeHandler = require("./routes");
const server = http.createServer(routeHandler);
//   if (url === "/home") res.write("Welcome home");
//   else if (url === "/about") res.write("Welcome to About Us page");
//   else if (url === "/node") res.write("Welcome to my Node Js project");
//   else res.write("Welcome to my world!");
server.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`server is running at http://localhost:${PORT}`);
});
