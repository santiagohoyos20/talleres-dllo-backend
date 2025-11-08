import { Router, Request, Response } from "express";
import { findMax, includes, sum, missingNumbers } from "./taller-02";

// INIT ROUTES
const taller2Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
/**
 * @swagger
 * /taller2/findmax:
 *   post:
 *     tags:
 *       - Taller 2
 *     summary: Encontrar el valor máximo en una lista
 *     description: Recibe una lista de números y retorna el valor máximo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [3, 7, 2, 9, 1, 5]
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
 *                 max:
 *                   type: number
 *                   example: 9
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
 *                   example: Missing field 'list'.
 */
function getMax(request: Request, response: Response) {
    try {
        const { list } = request.body;
        if (list === undefined || list === null) {
            throw new Error("Missing field 'list'.");
        }
        const max = findMax(list);
        response.status(200).json({
            message: "Success.",
            max: max,
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
 * /taller2/includes:
 *   post:
 *     tags:
 *       - Taller 2
 *     summary: Verificar si un elemento está en la lista
 *     description: Recibe una lista y un elemento, y retorna true si el elemento está en la lista, false en caso contrario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *               - x
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 3, 4, 5]
 *               x:
 *                 type: number
 *                 description: Elemento a buscar en la lista
 *                 example: 3
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
 *                 includes:
 *                   type: boolean
 *                   example: true
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
 *                   example: Missing fields 'list' or 'x'.
 */
function getIncludes(request: Request, response: Response) {
    try {
        const { list, x } = request.body;
        if (list === undefined || list === null || x === undefined || x === null) {
            throw new Error("Missing fields 'list' or 'x'.");
        }

        const includesX = includes(list, x);
        response.status(200).json({
            message: "Success.",
            includes: includesX,
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
 * /taller2/sum:
 *   post:
 *     tags:
 *       - Taller 2
 *     summary: Calcular la suma de elementos en una lista
 *     description: Recibe una lista de números y retorna la suma de todos sus elementos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 3, 4, 5]
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
 *                 suma:
 *                   type: number
 *                   example: 15
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
 *                   example: Missing field 'list'.
 */
function getSum(request: Request, response: Response) {
    try {
        const { list } = request.body;
        if (list === undefined || list === null) {
            throw new Error("Missing field 'list'.");
        }
        const suma = sum(list);

        response.status(200).json({
            message: "Success.",
            suma: suma,
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
 * /taller2/missing-numbers:
 *   post:
 *     tags:
 *       - Taller 2
 *     summary: Encontrar números faltantes en una secuencia
 *     description: Recibe una lista de números y retorna los números que faltan en la secuencia entre el mínimo y el máximo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - list
 *             properties:
 *               list:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Lista de números
 *                 example: [1, 2, 4, 6]
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
 *                 missing:
 *                   type: array
 *                   items:
 *                     type: number
 *                   example: [3, 5]
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
 *                   example: Missing field 'list'.
 */
function getMissingNumbers(request: Request, response: Response) {
    try {
        const { list } = request.body;
        if (list === undefined || list === null) {
            throw new Error("Missing field 'list'.");
        }
        const missing = missingNumbers(list);

        response.status(200).json({
            message: "Success.",
            missing: missing,
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
taller2Routes.post("/findmax", getMax);
taller2Routes.post("/includes", getIncludes);
taller2Routes.post("/sum", getSum);
taller2Routes.post("/missing-numbers", getMissingNumbers);

// EXPORT ROUTES
export default taller2Routes;
