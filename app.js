// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// Route de test
app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/status", (req, res) => {
  res.json({ status: "API is running" });
});

module.exports = app;
