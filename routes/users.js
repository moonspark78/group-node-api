const express = require('express');
const router = express.Router();


router.post('/',(req, res) => {
    res.post("Envoie de l'utilisateur")
})

// GET /users liste
router.get('/', (req, res) => {
  res.send('Liste d’utilisateurs');
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  res.send(`Utilisateur ${req.params.id} supprimé `);
});




module.exports = router;