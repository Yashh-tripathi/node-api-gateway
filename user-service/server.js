require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("User service responding");
});

app.listen(process.env.PORT, () => {
    console.log("User service running on port 5001.");
});
