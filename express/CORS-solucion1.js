const express = require("express");
const app = express();

// Agregar este endpoint al inicio del server responde 
// toda petición de OPTIONS con accesso permitido para todo.
app.use(function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

app.get("/", async function (req, res) {
  res.status(200).json({ message: "Success" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});