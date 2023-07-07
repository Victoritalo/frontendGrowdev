// const express = require("express");
import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/teste", function (req, res) {
    res.send("Hello World2");
  });

  
app.listen(3000, function () {
  console.log("Aplicação está rodando na porta 3000: http://localhost:3000");
});
