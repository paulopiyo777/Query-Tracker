// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // help connect to MongoDB database

// configures environment variables in .env file
require('dotenv').config()

// create server 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// starts the server
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})