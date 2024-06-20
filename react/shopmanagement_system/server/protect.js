const jwt = require('jsonwebtoken')

require('dotenv').config();
var config = require('./config');

function getToken(email) {
    return jwt.sign({ email }, config.KEY, { expiresIn: config.TimeOut })
}

function verifyToken(req, res, next) {
    // 从请求头部获取 token
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'Token is required' });
    }

    // 验证 token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        // 如果验证通过，将解码后的数据存储在请求对象中，供后续路由使用
        req.decoded = decoded;
        next();
    });
}

module.exports = {
    getToken,
    verifyToken
};