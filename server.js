const app = require('./app');
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});