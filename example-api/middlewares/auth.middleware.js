const jwt = require("jsonwebtoken");
const User  = require("../models/userSchema");

//protected routes
exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        success: false,
        error: "Not authorized, Token is not valid",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Not authorized, No token provided",
    });
  }
};
