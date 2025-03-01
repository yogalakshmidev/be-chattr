// Application file used to create server app
const express = require("express");
const logger = require('./middlewares/logger');
const cookieParser = require("cookie-parser");
const errorRoute = require('./middlewares/errorRoute');
const authRouter = require("./routes/authRoutes");
// create application
const app = express();

// parse the request body as json
app.use(express.json());

// parse the cookies
app.use(cookieParser());

// Middleware
app.use(logger);

// to check whether appln created using get request
app.use('/api/v1/auth', authRouter);

// Error Route
app.use(errorRoute);

module.exports = app;
