const jwt = require("jsonwebtoken");
const User = require("../models/UserLogin/userSchema");
const auth = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization;

    if (authToken) {
      const jwtSecretKey = process.env.JWTSecret;
      const data = await jwt.verify(
        authToken.replace("Bearer ", ""),
        jwtSecretKey
      );

      const user = await User.findOne({ _id: data.id });
      if (!user) {
        return res.status(401).json({ message: "Authorization denied" });
      }
      req.user = user;
      next();
    } else {
      console.log("no header");
      res.status(401).json({ message: "Authentication required" });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message ?? "Server error. Please try again later.",
    });
  }
};
module.exports = auth;
