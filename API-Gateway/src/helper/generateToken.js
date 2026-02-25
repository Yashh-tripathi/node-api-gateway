const jwt = require("jsonwebtoken");

const token = jwt.sign(
    {id: 1, role: "admin"},
    "supersecret",
    {expiresIn: "1h"}
);

console.log(token);