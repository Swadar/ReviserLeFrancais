const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Permet de lire les données JSON envoyées par le formulaire
app.use(express.static('.')); // Sert tes fichiers HTML/JS

// Route pour l'inscription
app.post('/api/signup', (req, res) => {
    const { pseudo, email, password } = req.body;

    console.log(`Nouvelle inscription : ${pseudo} (${email})`);
    
    // ICI : Ajoute la logique pour sauvegarder dans ta base de données
    // (ex: bcrypt.hash(...) puis INSERT INTO users ...)

    res.status(201).json({ message: "Utilisateur enregistré" });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});