const express = require("express");

const server = express();
const morgon = require("morgan");
server.use(express.json());
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");


//body parser
server.use(morgon("default"));
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/users",userRouter.router);

//MVC model-view-controller

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
