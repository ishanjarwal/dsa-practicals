// index.js

const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const port = 3000;

// Serve static files from the 'static' directory
app.use('/program', express.static(path.join(__dirname, 'files')));

// Define a basic route for the home page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'list.txt');  // Path to the file you want to serve

    // Read the contents of the file and send it as the response
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle error if file is not found or some other issue
            res.status(500).send('Error reading the file.');
        } else {
            res.send(`${data}`);  // Display the contents of the text file inside <pre> tags for formatting
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
