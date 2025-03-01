// Application file used to create server app
const express = require("express");
const logger = require('./middlewares/logger');
const cookieParser = require("cookie-parser");
const errorRoute = require('./middlewares/errorRoute');
// create application
const app = express();

// parse the request body as json
app.use(express.json());

// parse the cookies
app.use(cookieParser());

// Middleware
app.use(logger);

// to check whether appln created using get request
app.get("/api/v1", (req, res) => {
  res.json({ message: "Hello World" });
});

// Error Route
app.use(errorRoute);

module.exports = app;
