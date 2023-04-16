const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") res.write("Welcome home");
  else if (url === "/about") res.write("Welcome to About Us page");
  else if (url === "/node") res.write("Welcome to my Node Js project");
  else res.write("Welcome to my world!"); //write a response to the client
  res.end(); //end the response
});
server.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`server is running at http://localhost:${PORT}`);
});
