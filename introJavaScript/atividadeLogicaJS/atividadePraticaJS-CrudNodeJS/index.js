const express = require("express");
const app = express();

app.get("/cadastro", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Connected!");
  console.log("Node API running on port 3000");
});
