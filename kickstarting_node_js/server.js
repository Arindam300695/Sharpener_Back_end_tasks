const http = require("http");
const fs = require("fs");
const PORT = 4000;
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  //   if (url === "/home") res.write("Welcome home");
  //   else if (url === "/about") res.write("Welcome to About Us page");
  //   else if (url === "/node") res.write("Welcome to my Node Js project");
  //   else res.write("Welcome to my world!");
  if (url === "/") {
    const fileData = fs.readFileSync("./message.txt", "utf8");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(fileData);
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='data'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url == "/message" && method == "POST") {
    res.setHeader("Content-Type", "text/html");
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});
server.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`server is running at http://localhost:${PORT}`);
});
