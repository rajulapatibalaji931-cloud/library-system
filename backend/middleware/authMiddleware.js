const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get Token
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "Access Denied",
      });
    }

    // Remove Bearer
    const jwtToken = token.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;