const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");

const server = express();
const morgon = require("morgan");
server.use(express.json());

//body parser
server.use(morgon("default"));
server.use(express.static("public"));
//server.use((req, res, next) => {
 // console.log(
   // req.get("User-Agent"),
    //new Date(),
    //req.method,
    //req.ip,
    //req.hostname
  //);
  //next();
//});

const auth = (req, res, next) => {
  //console.log(req.query);
 // if (req.body.password == "1234") {
  //  next();
  //} else {
   // res.sendStatus(401);
  //}
  next();
};



//API -Endpoint -Route
server.get("/product/:id", auth, (req, res) => {
    console.log(req.params);
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/mode", (req, res) => {
  //res.sendStatus(404);
  //res.json(products);
  //res.send("<h1>hello</h1>");
  //res.sendFile('/Users\hp\Desktop\node-app\index.html')
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
