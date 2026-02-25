const { createProxyMiddleware } = require("http-proxy-middleware");

const createServiceProxy = (target) => {
    return createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: (path, req) => {
            return path.replace(/^\/(users|auth|admin)/, "");
        }
    });
};

module.exports = createServiceProxy;