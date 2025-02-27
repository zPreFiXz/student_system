const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { authenticateToken } = require("./middlewares/auth");
const apiRoute = require("./routes/api");
const loginRoute = require("./routes/auth");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Login API
app.use("/api/auth", loginRoute);

// API
app.use("/api",authenticateToken, apiRoute);

// Upload Image API
app.use('/', express.static(path.join(__dirname, '')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});