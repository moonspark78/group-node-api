// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Route de test
app.get('/', (req, res) => {
  res.send('Hello World !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;