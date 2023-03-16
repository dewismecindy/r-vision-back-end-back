const express = require("express");
const app = express();
app.use(express.json());

const nameTab = ["Iris", "Olympe", "Rachel"];

app.get("/", (req, res) => {
  /*   console.log("Je suis passé dans ma route"); */
  console.log(req.query);
  res.json("Championne ! Tu es sur la route /");
});

app.get("/get-name", (req, res) => {
  res.status(200).json(nameTab);
});

app.post("/create/names", (req, res) => {
  console.log(req.body);
  nameTab.push(req.body.country);

  res.status(200).json("Country is create");
});
app.get("/animals/:age", (req, res) => {
  console.log(req.params.age);
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas" });
});

app.listen(3000, () => {
  console.log("Server has started");
});
