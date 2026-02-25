require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Auth Service Response");
});

app.listen(process.env.PORT, () => {
  console.log("Auth Service running on 5002");
});