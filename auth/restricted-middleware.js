const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    // verify is it valid?
    // it's made by us (was made using the secret)
    // the token hasn't expired
    // hasn't been tampered with etc
    
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
