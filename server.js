// Req. Dependencies
//variable
const express = require('express');
const mongoose = require('mongoose');
//require middleware for logging
const logger = require('morgan');
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

//Set up Model
const peopleSchema = new mongoose.Schema({
    name: String,
    Image: String,
    title: String,
// Timestamps is true = created and updated at
}, {timestamps: true});

// This model is needed for full crud 
// Argument name then Schema Name
const People = mongoose.model('People', peopleSchema);

// Mount Middleware
//express.json intercepts json data and turns it into req.body
app.use(express.json());
// app.use (express.urlencoded) {extended: false}))
//would turn form data into req.body

// Mount Routes
///Root Route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
//

// Tell App to Listen On Port
//interpulated port in the console log / will make sure its working correctly
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});