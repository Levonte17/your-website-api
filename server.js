// Req. Dependencies
//variable
const express = require('express');
const mongoose = require('mongoose');
// Initiaize Express App
const app = express();


// Configure App Settings
//Have to require before connecting to the database
require('dotenv').config();

// part is connecting to the database
//If port is not defined it will use 4000 (default assignment)
const { PORT = 4000, DATABASE_URL } = process.env;

// Establish connection to MongoDB
//If semicolon only the last one
mongoose.connect(DATABASE_URL);
mongoose.connection 
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (error) => console.log('error' + error.message))
.on('disconnected', () => console.log('Disconnected from MongoDB'));

// Mount Middleware
// Mount Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Tell App to Listen On Port
//interpulated port in the console log / will make sure its working correctly
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});