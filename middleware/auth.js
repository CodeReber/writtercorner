const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Check token from header
  const token = req.header('x-auth-token');

  // See if not token present
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // check the token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
