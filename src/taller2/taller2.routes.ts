import { Router, Request, Response } from "express";
import { findMax, includes, sum, missingNumbers } from "./taller-02";

// INIT ROUTES
const taller2Routes = Router();

// DECLARE ENDPOINT FUNCTIONS
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
