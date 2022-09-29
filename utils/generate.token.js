const jwt = require("jsonwebtoken");

exports.generateToken = function (payload) {
  return jwt.sign({ id: payload }, process.env.JWT_SECRET, {
    expiresIn: "1hr",
  });
};
