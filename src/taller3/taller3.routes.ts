import { Router, Request, Response } from "express";
import { filterVocales, filterConsonantes, desglosarString, twoSum, conversionRomana, descomposicion } from "./taller-03";

// INIT ROUTES
const taller3Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
/**
 * @swagger
 * /taller3/desglosar-string:
 *   post:
 *     tags:
 *       - Taller 3
 *     summary: Desglosar un string en vocales o consonantes
 *     description: Recibe un string y un comando ('vocales' o 'consonantes') y retorna solo las vocales o consonantes del string.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - string
 *               - command
 *             properties:
 *               string:
 *                 type: string
 *                 description: Cadena de texto a desglosar
 *                 example: "hola mundo"
 *               command:
 *                 type: string
 *                 description: Tipo de filtro a aplicar
 *                 enum: [vocales, consonantes]
 *                 example: "vocales"
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 vocales:
 *                   type: string
 *                   description: Retornado cuando command es 'vocales'
 *                   example: 4
 *                 consonantes:
 *                   type: string
 *                   description: Retornado cuando command es 'consonantes'
 *                   example: 5
 *       500:
 *         description: Error en la operación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error.
 *                 error:
 *                   type: string
 *                   example: Missing required fields.
 */
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
        console.log(string, command, desglosado);
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

/**
 * @swagger
 * /taller3/twosum:
 *   post:
 *     tags:
 *       - Taller 3
 *     summary: Encontrar dos números que sumen un target
 *     description: Dado un array de números y un target, retorna los índices de los dos números que suman el target. Este es el clásico problema "Two Sum".
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numbers
 *               - target
 *             properties:
 *               numbers:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [2, 7, 11, 15]
 *               target:
 *                 type: number
 *                 description: Número objetivo que debe ser la suma de dos elementos
 *                 example: 9
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 resultado:
 *                   type: array
 *                   items:
 *                     type: number
 *                   description: Índices de los dos números que suman el target
 *                   example: [0, 1]
 *       500:
 *         description: Error en la operación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error.
 *                 error:
 *                   type: string
 *                   example: Missing required fields.
 */
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

/**
 * @swagger
 * /taller3/conversion-romana:
 *   post:
 *     tags:
 *       - Taller 3
 *     summary: Convertir número romano a decimal
 *     description: Recibe un número en formato romano (I, V, X, L, C, D, M) y retorna su equivalente en número decimal.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roman
 *             properties:
 *               roman:
 *                 type: string
 *                 description: Número en formato romano
 *                 example: "XIV"
 *     responses:
 *       200:
 *         description: Conversión exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 resultado:
 *                   type: number
 *                   example: 14
 *       500:
 *         description: Error en la conversión
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error.
 *                 error:
 *                   type: string
 *                   example: Missing field 'roman'.
 */
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


/**
 * @swagger
 * /taller3/descomposicion:
 *   post:
 *     tags:
 *       - Taller 3
 *     summary: Descomponer una cadena
 *     description: Recibe una cadena de texto y realiza algún tipo de descomposición o análisis sobre ella (la operación específica depende de la implementación).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cadena
 *             properties:
 *               cadena:
 *                 type: string
 *                 description: Cadena de texto a descomponer
 *                 example: "malhumor,al,hum,humor,m,mal,malhu"
 *     responses:
 *       200:
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 resultado:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Resultado de la descomposición
 *                   example: ["mal", "humor"]
 *       500:
 *         description: Error en la operación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error.
 *                 error:
 *                   type: string
 *                   example: Missing field 'cadena'.
 */
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