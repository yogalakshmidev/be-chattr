// Database server file

// to initialize db
const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./utils/config");

const app = require("./app");

// to connect with db
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MONGODB");

    // start the server
    app.listen(PORT, () => {
      console.log(`Server running on the port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err);
  });
