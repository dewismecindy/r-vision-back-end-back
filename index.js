const express = require("express");
const app = express();

const nameTab = ["Iris", "Olympe", "Rachel"];

app.get("/", (req, res) => {
  console.log("Je suis passé dans ma route");
  res.json("Championne ! Tu es sur la route /");
});

app.get("/get-name", (req, res) => {
  res.status(200).json(nameTab);
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
