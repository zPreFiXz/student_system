const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const path = require("path");

const apiRoute = require("./routes/api");
const loginRoute = require("./routes/auth");
const { authenticateToken } = require("./middlewares/auth");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/uploads', express.static(path.join(__dirname, '')));

// Login API
app.use("/api/auth", loginRoute);

// API
app.use("/api",authenticateToken, apiRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});