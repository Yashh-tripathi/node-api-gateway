require("dotenv").config();
const express = require("express");
const redis = require("./config/redis.js");
const service = require("./config/services.js");
const createProxy = require("./proxy/proxy.js");
const authMiddleware = require("./middleware/auth.middleware.js");
const rateLimiterMiddleware = require("./middleware/rateLimiter.middleware.js");
const rbac = require("./middleware/rbac.middleware.js");
const app = express();


app.get("/", async (req, res) => {
    await redis.set("test", "API Gateway working");
    const value = await redis.get("test");
    res.send(value);
});

// Correct routing
app.use("/users",
    authMiddleware,
    rateLimiterMiddleware,
    rbac(["user", "admin"]),
    createProxy(service.USER_SERVICE)
);


app.use("/admin",
    authMiddleware,
    rateLimiterMiddleware,
    rbac(["admin"]),
    createProxy(service.AUTH_SERVICE)
)
app.use("/auth", createProxy(service.AUTH_SERVICE));

app.listen(process.env.PORT, () => {
    console.log("Gateway running on port : 4000");
});