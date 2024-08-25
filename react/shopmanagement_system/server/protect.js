const jwt = require('jsonwebtoken')

require('dotenv').config();
var config = require('./config');

function getToken(email) {
    return jwt.sign({ email }, config.KEY, { expiresIn: config.TimeOut })
}

function verifyToken(req, res, next) {
    var token = req.headers['authorization'];
    token = token.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'Token is required' });
    }


    jwt.verify(token, config.KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.decoded = decoded;
        next();
    });
}

module.exports = {
    getToken,
    verifyToken
};