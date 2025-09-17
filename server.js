const express = require('express');
const app = express();

// middleware
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Hello, your Express server is running 🚀');
});

// listen on a port
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
