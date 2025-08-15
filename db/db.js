const mongoose = require('mongoose');
require('dotenv').config();

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// Export the connection
module.exports = mongoose;
