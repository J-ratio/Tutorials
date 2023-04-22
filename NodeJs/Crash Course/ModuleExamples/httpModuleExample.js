const http = require("http");
const path = require("path");
const fs = require("fs");

//Server Object
http
  .createServer((req, res) => {
    res.write("Hello there");
    res.end();
  })
  .listen(8080, () => {
    console.log("Server Created.");
  });

const server = http.createServer((req, res) => {
  console.log(req.url);

  //Checking for root dir
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "../", "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  //Checking for other dir
  else if (req.url === "/api/users") {
    const users = [
      { name: "A", age: 20 },
      { name: "B", age: 34 },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

//First look for port variable in environment variables, if not found use default port as 8000
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
