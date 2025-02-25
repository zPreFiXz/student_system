const jwt = require("jsonwebtoken");

const SECRET_KEY = "my-key-se-project";

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user_id = user.username;
    next();
  });
};

module.exports = { authenticateToken };
