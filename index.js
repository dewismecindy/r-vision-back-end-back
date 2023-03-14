const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Je suis passé dans ma route");
  res.json("Championne ! Tu es sur la route /");
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
