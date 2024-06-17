const express = require("express");
const connectToMongo = require("./config/Db");
const path = require("path");
const cors = require("cors");
require("./models/UserSchema");
// require('./models/FileShareSchema')

connectToMongo();
const app = express();
const port = 8000;
app.set("views", path.resolve("./public"));

app.use(cors());
app.use(express.json()); //json format data..

const routes = require("./routes");

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send(
    '<div style="text-align: center;"><h1>Server Running On Port: 8000</h1></div>'
  );
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
