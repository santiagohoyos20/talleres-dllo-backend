import { Router, Request, Response } from "express";
import { convertidorTemp, resolvedor, mejorParidad, peorParidad } from "./taller-01";


// INIT ROUTES
const taller1Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
/**
 * @swagger
 * /taller1/convertidor-temperatura:
 *   post:
 *     tags:
 *       - Taller 1
 *     summary: Convertir temperatura de Celsius a Fahrenheit
 *     description: Recibe una temperatura en grados Celsius y retorna su equivalente en Fahrenheit.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - celsius
 *             properties:
 *               celsius:
 *                 type: number
 *                 description: Temperatura en grados Celsius
 *                 example: 25
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
 *                 fahrenheit:
 *                   type: number
 *                   example: 77
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
 *                   example: Missing field 'celsius'.
 */
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

/**
 * @swagger
 * /taller1/resolvedor:
 *   post:
 *     tags:
 *       - Taller 1
 *     summary: Resolver ecuación cuadrática
 *     description: Resuelve una ecuación cuadrática de la forma ax² + bx + c = 0 usando la fórmula general. El parámetro 'signo' determina si se usa el + o - en la fórmula.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - a
 *               - b
 *               - c
 *               - signo
 *             properties:
 *               a:
 *                 type: number
 *                 description: Coeficiente a de la ecuación cuadrática
 *                 example: 1
 *               b:
 *                 type: number
 *                 description: Coeficiente b de la ecuación cuadrática
 *                 example: -5
 *               c:
 *                 type: number
 *                 description: Coeficiente c de la ecuación cuadrática
 *                 example: 6
 *               signo:
 *                 type: number
 *                 description: Determina qué raíz calcular (1 para +, -1 para -)
 *                 enum: [1, -1]
 *                 example: 1
 *     responses:
 *       200:
 *         description: Cálculo exitoso
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
 *                   example: 3
 *       500:
 *         description: Error en el cálculo
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

/**
 * @swagger
 * /taller1/mejor-paridad:
 *   post:
 *     tags:
 *       - Taller 1
 *     summary: Verificar paridad (método optimizado)
 *     description: Determina si un número es par o impar usando el método más eficiente (operador módulo o bitwise).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - number
 *             properties:
 *               number:
 *                 type: number
 *                 description: Número a verificar
 *                 example: 42
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 par:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Error en la verificación
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
 *                   example: Missing field 'number'.
 */
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

/**
 * @swagger
 * /taller1/peor-paridad:
 *   post:
 *     tags:
 *       - Taller 1
 *     summary: Verificar paridad (método no optimizado)
 *     description: Determina si un número es par o impar usando un método menos eficiente (probablemente iterativo o recursivo).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - number
 *             properties:
 *               number:
 *                 type: number
 *                 description: Número a verificar
 *                 example: 2
 *     responses:
 *       200:
 *         description: Verificación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success.
 *                 par:
 *                   type: boolean
 *                   example: true
 *       500:
 *         description: Error en la verificación
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
 *                   example: Missing field 'number'.
 */
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
