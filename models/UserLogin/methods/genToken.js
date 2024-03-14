const jwt = require("jsonwebtoken");

module.exports = (id) => {
  const data = { id: id };
  return jwt.sign(data, process.env.JWTSecret );
};
// {expiresIn:60*60}