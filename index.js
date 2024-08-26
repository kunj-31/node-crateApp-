require("dotenv").config();
const express = require("express");

const server = express();
const morgon = require("morgan");
const mongoose = require("mongoose");

server.use(express.json());
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

console.log("env", process.env.DB_PASSWORD);

//db connection
main().catch(() => console.log());

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");

  console.log("db connected");
}

//body parser
server.use(morgon("default"));
server.use(express.static("public"));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log('server started');
});