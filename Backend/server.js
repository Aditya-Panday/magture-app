const express = require("express");
const connectToMongo = require("./config/Db");
const cors = require("cors");
require('dotenv').config();

// Models
require("./models/UserSchema");
require("./models/HomeSchema");
require("./models/CommonSchema");
require("./models/LeadsSchema");
require("./models/BannerSchema");
require("./models/BlogsSchema");
require("./models/Category");
require("./models/Testimonial");

// Routes
const userRoutes = require("./routes/Authentication");
const homeRoutes = require("./routes/Home");
const commonRoutes = require("./routes/CommonApis");
const leadsRoutes = require("./routes/LeadsApi");
const bannerRoutes = require("./routes/BannerApis");
const blogRoutes = require("./routes/BlogsApis");
const categoryRoutes = require("./routes/Category");
const testimonialRoutes = require("./routes/TestimonialApis");

// Connect to MongoDB
connectToMongo();

// Initialize Express App
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/auth", userRoutes);
app.use("/api", homeRoutes);
app.use("/api/common", commonRoutes);
app.use("/api/lead", leadsRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/testimonial", testimonialRoutes);

// Default route
app.get("/", (req, res) => {
  res.send('<div style="text-align: center;"><h1>Server Running On Port: 8000</h1></div>');
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
