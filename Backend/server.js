const connectDB = require("./config/db");
connectDB();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Test API
app.get('/', (req, res) => {
    res.send("StudyFort Backend Running!");
});

// Start Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
