const express = require('express');
const connectDB = require('../config/db'); // Import the DB connection
require('dotenv').config(); // Load environment variables

// Connect to database
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

