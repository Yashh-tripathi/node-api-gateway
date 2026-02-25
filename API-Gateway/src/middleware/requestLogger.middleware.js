const redis = require("../config/redis.js");

module.exports = async (req, res, next) => {
    try {
        
        const log = {
            usedId: req.user? req.user.id : "guest",
            role: req.user? req.user.role : "guest",
            route: req.originalUrl,
            method: req.method,
            time: new Date().toISOString()
        };

        await redis.lpush("request_logs", JSON.stringify(log));

    } catch (error) {
        console.log("Logging error : ", error);
    }
    next();
};



