// routes/index.js
const express = require("express");
const router = express.Router();

// Import individual route files
const authenticationRoutes = require("./Authentication");

// Define routes
router.use("/auth", authenticationRoutes);
module.exports = router;
