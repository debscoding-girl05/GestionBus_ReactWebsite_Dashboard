require("dotenv").config();
const mysql = require("mysql2");

// Connexion à la base de données
const db = mysql.createConnection({
  host: process.env.DB_HOST, // localhost or the correct host
  port: process.env.DB_PORT, // port for MySQL, for example, 3309
  user: process.env.DB_USER, // your MySQL username
  password: process.env.DB_PASSWORD, // your MySQL password
  database: process.env.DB_NAME, // the name of your database
  connectTimeout: 10000, // optional: connection timeout
});

db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err.stack);
    return;
  }
  console.log("Connecté à la base de données");
});

module.exports = db;
