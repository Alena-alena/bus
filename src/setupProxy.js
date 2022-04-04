const { createProxyMiddleware } = require('http-proxy-middleware');

const proxyUrl = process.env.REACT_APP_PROXY_URL;

module.exports = function(app) {
    if (!proxyUrl) return;

    app.use(
        '/api',
        createProxyMiddleware({
            target: proxyUrl,
            changeOrigin: true,
        })
    );
};
