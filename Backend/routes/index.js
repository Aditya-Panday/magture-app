// routes/index.js
const express = require("express");
const router = express.Router();

// Import individual route files
const authenticationRoutes = require("./Authentication");
const sharedFileRoutes = require("./SharedFileData");

// Define routes
router.use("/auth", authenticationRoutes);
router.use("/", sharedFileRoutes);

module.exports = router;
