const jwt = require('jsonwebtoken');


function generateToken(username) {
    const payload = {
        username
    };

    const secret = process.env.JWT_SECRET || 'this is the safest secret!';

    const options = {
        expiresIn: '8h',
    };

    return jwt.sign(payload, secret, options);
}

module.exports = generateToken;