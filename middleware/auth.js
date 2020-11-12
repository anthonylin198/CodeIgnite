const jwt = require("jsonwebtoken");

// autho middleware that checks for JWT web token
module.exports = function (req, res, next) {
  // Get token from header
  console.log(req);
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
