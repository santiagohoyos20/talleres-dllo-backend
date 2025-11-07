import { Router, Request, Response } from "express";
import { findMax, includes, sum, missingNumbers } from "./taller-02";

// INIT ROUTES
const taller2Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function getMax(request: Request, response: Response) {
    const { list } = request.body;
    const max = findMax(list);

    response.status(200).json({
        message: "Success.",
        max: max,
    });
}

async function getIncludes(request: Request, response: Response) {
    const { list, x } = request.body;
    const includesX = includes(list, x);

    response.status(200).json({
        message: "Success.",
        includes: includesX,
    });
}

async function getSum(request: Request, response: Response) {
    const { list } = request.body;
    const suma = sum(list);

    response.status(200).json({
        message: "Success.",
        suma: suma,
    });
}

async function getMissingNumbers(request: Request, response: Response) {
    const { list } = request.body;
    const missing = missingNumbers(list);

    response.status(200).json({
        message: "Success.",
        missing: missing,
    });
}

// DECLARE ENDPOINTS
taller2Routes.post("/findmax", getMax);
taller2Routes.post("/includes", getIncludes);
taller2Routes.post("/sum", getSum);
taller2Routes.post("/missing-numbers", getMissingNumbers);

// EXPORT ROUTES
export default taller2Routes;
