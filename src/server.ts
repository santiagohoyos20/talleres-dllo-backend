import express, { Request, Response } from "express";
import cors from "cors";
import taller1 from "./taller1/taller1.routes";
import taller2 from "./taller2/taller2.routes";
import taller3 from "./taller3/taller3.routes";
import path from "path/win32";

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

app.use(SERVER_VERSION + "taller1", taller1);
app.use(SERVER_VERSION + "taller2", taller2);
app.use(SERVER_VERSION + "taller3", taller3);

app.use(express.json());

// Swagger setup
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API de Talleres',
    version: '1.0.0',
    description: 'Documentación Swagger para mi proyecto de talleres',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',  // ← SIN la variable, URL completa y directa
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [
    path.join(__dirname, './*.ts'),              // server.ts
    path.join(__dirname, './taller1/*.ts'),      // archivos de taller1
    path.join(__dirname, './taller2/*.ts'),      // archivos de taller2
    path.join(__dirname, './taller3/*.ts'),      // archivos de taller3
  ]
};

const swaggerSpec = swaggerJSDoc(options);

// Ruta de la UI de Swagger
app.use(SERVER_VERSION + "docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor Express + TypeScript funcionando");
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