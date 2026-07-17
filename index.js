const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by Plesk's custom environment variables, or fallback to 3000
const port = process.env.port || process.env.PORT || 3000;

// Serve static assets from the current directory
app.use(express.static(__dirname));

// Serve index.html for the main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback route for routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
