const http = require("http");
const PORT = 4000;
const server = http.createServer((req, res) => {
  res.write("Arindam Chattopadhyay"); //write a response to the client
  res.end(); //end the response
});
server.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`server is running at http://localhost:${PORT}`);
});
