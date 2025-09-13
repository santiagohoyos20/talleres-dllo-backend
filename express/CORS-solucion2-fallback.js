const express = require("express");
let cors = require("cors");
const app = express();

app.use(cors());

app.get("/", async function (req, res) {
  res.status(200).json({ message: "Success" });
});

// Fallback - endpoint de 404
app.use(async function (req, res) {
  res.status(404).json({ message: "Not found." });
});
// Este endpoint va al final, para recibir toda petición que no fue servida por otros endpoints.

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

