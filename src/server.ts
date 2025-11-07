import express, { Request, Response } from "express";
import cors from "cors";
import taller1 from "./taller1/taller1.routes";
// import taller2 from "./taller2/taller2.routes";
// import taller3 from "./taller3/taller3.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

app.use(SERVER_VERSION + "taller1", taller1);
// app.use(SERVER_VERSION + "taller2", taller2);
// app.use(SERVER_VERSION + "taller3", taller3);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express + TypeScript funcionando 🚀");
});

// FALLBACKS
function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}
app.use(routeNotFound);

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});