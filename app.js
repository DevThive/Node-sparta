const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas");
connect();

app.use(express.json());

app.use("/api", [goodsRouter, cartsRouter]);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(port, "포트로 열림");
});
