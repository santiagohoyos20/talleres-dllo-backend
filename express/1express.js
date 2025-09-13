const express = require("express");
const app = express();

// endpoint
app.get("/", async function (req, res) {
  res.status(200).json({ message: "Success" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Metodos HTTP
// Tipicamente usados en REST:
// GET PUT POST PATCH DELETE
// No tan tipicos:
// OPTIONS TRACE HEAD CONNECT

// Metodos HTTP => CRUD
// GET    PUT            POST   PATCH  DELETE
// READ   UPDATE/CREATE  CREATE UPDATE DELETE

// Put sobre-escribe (o crea) un recurso.
// Patch modifica un recurso ya existente.