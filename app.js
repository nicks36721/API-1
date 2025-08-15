const express = require('express');
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const resourceRoutes = require('./routes/resourceRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
require('./db/db');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Resource Management API!');
});

app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);

// Export the app for Vercel
module.exports = app;
