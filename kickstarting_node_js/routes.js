const fs = require("fs");
const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
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
};
module.exports = routeHandler;
