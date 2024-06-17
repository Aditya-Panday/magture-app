const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    console.log("Authorization header missing");
    return res.status(401).json({ error: "You must have logged in 1" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log("Token verification failed:", err);
      return res.status(401).json({ error: "You must have logged in 2" });
    }
    const { _id } = payload;
    USER.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};
