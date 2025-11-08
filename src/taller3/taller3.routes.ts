import { Router, Request, Response } from "express";
import { filterVocales, filterConsonantes, desglosarString, twoSum, conversionRomana, descomposicion } from "./taller-03";

// INIT ROUTES
const taller3Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
function desglosar(request: Request, response: Response) {
    try {
        const { string, command } = request.body;
        if (
            string === undefined || string === null ||
            command === undefined || command === null
        ) {
            throw new Error("Missing required fields: 'string' or 'command'.");
        }

        const desglosado = desglosarString(string, command);
        const resultado: Record<string, any> = {
            message: "Success.",
        }
        if (command === "vocales") {
            resultado["vocales"] = desglosado
        }
        else {
            resultado["consonantes"] = desglosado
        }

        response.status(200).json(resultado);
    }
    catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }
}

function getTwoSum(request: Request, response: Response) {
    try {
        const { numbers, target } = request.body;
        if (
            numbers === undefined || numbers === null ||
            target === undefined || target === null
        ) {
            throw new Error("Missing required fields: 'numbers' or 'target'.");
        }

        const resultado = twoSum(numbers, target);

        response.status(200).json({
            message: "Success.",
            resultado: resultado,
        });
    }
    catch (error: any) {
        response.status(500).json({
            message: "Error.",
            error: error.message,
        });
    }
}

function getConversionRomana(request: Request, response: Response) {
    try {
        const { roman } = request.body;
        if (roman === undefined || roman === null) {
            throw new Error("Missing field 'roman'.");
        }
        const resultado = conversionRomana(roman);

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

function getDescomposicion(request: Request, response: Response) {
    try {
        const { cadena } = request.body;
        if (cadena === undefined || cadena === null) {
            throw new Error("Missing field 'cadena'.");
        }
        const resultado = descomposicion(cadena);

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

// DECLARE ENDPOINTS
taller3Routes.post("/desglosar-string", desglosar);
taller3Routes.post("/twosum", getTwoSum);
taller3Routes.post("/conversion-romana", getConversionRomana);
taller3Routes.post("/descomposicion", getDescomposicion);


// EXPORT ROUTES
export default taller3Routes;