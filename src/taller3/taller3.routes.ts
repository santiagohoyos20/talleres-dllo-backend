import { Router, Request, Response } from "express";
import { filterVocales, filterConsonantes, desglosarString, twoSum, conversionRomana, descomposicion } from "./taller-03";

// INIT ROUTES
const taller3Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function desglosar(request: Request, response: Response) {
    const { string, command } = request.body;
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

async function getTwoSum(request: Request, response: Response) {
    const { numbers, target } = request.body;
    const resultado = twoSum(numbers, target);

    response.status(200).json({
        message: "Success.",
        resultado: resultado,
    });
}

async function getConversionRomana(request: Request, response: Response) {
    const { roman } = request.body;
    const resultado = conversionRomana(roman);

    response.status(200).json({
        message: "Success.",
        resultado: resultado,
    });
}

async function getDescomposicion(request: Request, response: Response) {
    const { cadena } = request.body;
    const resultado = descomposicion(cadena);

    response.status(200).json({
        message: "Success.",
        resultado: resultado,
    });
}

// DECLARE ENDPOINTS
taller3Routes.post("/desglosar-string", desglosar);
taller3Routes.post("/twosum", getTwoSum);
taller3Routes.post("/conversion-romana", getConversionRomana);
taller3Routes.post("/descomposicion", getDescomposicion);


// EXPORT ROUTES
export default taller3Routes;