const redis = require("../config/redis.js");

const WINDOW_SIZE = process.env.RATE_LIMIT_WINDOW;
const MAX_REQUESTS = process.env.RATE_LIMIT_MAX;

module.exports = async (req,res,next) => {
    try {
        const userId = req.user.id;
        const key = `rate:${userId}`;
        const current = await redis.get(key);
        if(current && parseInt(current) >= MAX_REQUESTS){
            return res.status(429).json({
                message: "Too many requests. Try again later."
            });
        }
        if(current){
            await redis.incr(key);
        }else{
            await redis.set(key, 1,"EX", WINDOW_SIZE);
        }

        next();
    } catch (error) {
        console.error(error);
        next();
    }
}