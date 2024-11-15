require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db"); // Database connection
const cors = require("cors");
const bcrypt = require("bcrypt");

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Import des fichiers de routes
const { verifyToken } = require("./routes/authMiddleware");
const authRoutes = require("./routes/auth");
const clientRoutes = require("./routes/clients");
const voyageRoutes = require("./routes/voyages");
const reservationRoutes = require("./routes/reservations");
const paiementRoutes = require("./routes/paiements");
const administrationRoutes = require("./routes/administration");
const trajetRoutes = require("./routes/trajets");
const vehiculeRoutes = require("./routes/vehicule");
const chauffeurRoutes = require("./routes/chauffeur");
const classeRoutes = require("./routes/classe");

// Protection des routes avec le middleware verifyToken
app.use("/api/auth", verifyToken, authRoutes); // only once
app.use("/api/clients", verifyToken, clientRoutes);
app.use("/api/voyages", verifyToken, voyageRoutes);
app.use("/api/reservations", verifyToken, reservationRoutes);
app.use("/api/paiements", verifyToken, paiementRoutes);
app.use("/api/admin", verifyToken, administrationRoutes);
app.use("/api/trajets", verifyToken, trajetRoutes);
app.use("/api/vehicules", verifyToken, vehiculeRoutes);
app.use("/api/chauffeurs", verifyToken, chauffeurRoutes);
app.use("/api/classes", verifyToken, classeRoutes);

// Route d'accueil par défaut
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API de Travel6");
});

// Middleware pour gérer les erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Une erreur est survenue" });
});

// Gestion des erreurs de route non trouvée
app.use((req, res) => {
  res.status(404).send({ message: "Route non trouvée" });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000; // Use the port from .env or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
