const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/cadastro", (req, res) => {
  res.send("Hello, my name is Vic");
});
app.use(express.json())
app.post("/product", (req, res) => {
  res.send(req.body);
});

mongoose
  .connect(
    
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Node API app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
