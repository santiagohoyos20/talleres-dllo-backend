import { Router, Request, Response } from "express";
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./taller-01";


// INIT ROUTES
const taller1Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function convertidorTemperatura(request: Request, response: Response) {
    const { celsius } = request.body;
    const fahrenheit = convertidorTemp(celsius);

    response.status(200).json({
        message: "Success.",
        fahrenheit: fahrenheit,
    });
}

async function postResolvedor(request: Request, response: Response) {
    const { a, b, c, signo } = request.body;
    const resultado = resolvedor(a, b, c, signo);

    response.status(200).json({
        message: "Success.",
        resultado: resultado,
    });
}

async function postMejorParidad(request: Request, response: Response) {
    const { number } = request.body;
    const par = mejorParidad(number);

    response.status(200).json({
        message: "Success.",
        par: par,
    });
}

async function postPeorParidad(request: Request, response: Response) {
    const { number } = request.body;
    const par = peorParidad(number);

    response.status(200).json({
        message: "Success.",
        par: par,
    });
}

// DECLARE ENDPOINTS
taller1Routes.post("/convertidor-temperatura", convertidorTemperatura);
taller1Routes.post("/resolvedor", postResolvedor);
taller1Routes.post("/mejor-paridad", postMejorParidad);
taller1Routes.post("/peor-paridad", postPeorParidad);

// EXPORT ROUTES
export default taller1Routes;
