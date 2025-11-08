import { Router, Request, Response } from "express";
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./taller-01";


// INIT ROUTES
const taller1Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
function convertidorTemperatura(request: Request, response: Response) {
    try {
        const { celsius } = request.body;

        if (celsius === undefined || celsius === null) {
            throw new Error("Missing field 'celsius'.");
        }

        if (typeof celsius !== "number") {
            throw new Error("Invalid input.");
        }
        const fahrenheit = convertidorTemp(celsius);
        response.status(200).json({
            message: "Success.",
            fahrenheit: fahrenheit,
        });
    } catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }
}

function postResolvedor(request: Request, response: Response) {
    try {
        const { a, b, c, signo } = request.body;

        if (
            a === undefined || a === null ||
            b === undefined || b === null ||
            c === undefined || c === null ||
            signo === undefined || signo === null
        ) {
            throw new Error("Missing required fields: 'a', 'b', 'c', or 'signo'.");
        }

        if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" || (signo !== 1 && signo !== -1)) {
            throw new Error("Invalid input.");
        }

        const resultado = resolvedor(a, b, c, signo);
        response.status(200).json({
            message: "Success.",
            resultado: resultado,
        });
    } catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }

}

function postMejorParidad(request: Request, response: Response) {
    try {
        const { number } = request.body;
        if (number === undefined || number === null) {
            throw new Error("Missing field 'number'.");
        }
        if (typeof number !== "number") {
            throw new Error("Invalid input.");
        }
        const par = mejorParidad(number);
        response.status(200).json({
            message: "Success.",
            par: par,
        });
    }
    catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }
}

function postPeorParidad(request: Request, response: Response) {
    try {
        const { number } = request.body;
        
        if (number === undefined || number === null) {
            throw new Error("Missing field 'number'.");
        }
        if (typeof number !== "number") {
            throw new Error("Invalid input.");
        }

        const par = peorParidad(number);
        response.status(200).json({
            message: "Success.",
            par: par,
        });
    }
    catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }
}

// DECLARE ENDPOINTS
taller1Routes.post("/convertidor-temperatura", convertidorTemperatura);
taller1Routes.post("/resolvedor", postResolvedor);
taller1Routes.post("/mejor-paridad", postMejorParidad);
taller1Routes.post("/peor-paridad", postPeorParidad);

// EXPORT ROUTES
export default taller1Routes;
