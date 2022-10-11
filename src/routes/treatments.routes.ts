import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createTreatment, listTreatment } from "@src/modules/treatments";
import { request, Request, Response, Router } from "express";


const treatmentsRoutes = Router();

treatmentsRoutes.post("/", ensureIsAdmin, (request, response) => 
    createTreatment.execute(request, response)
);

treatmentsRoutes.get("/", (request, response) => 
    listTreatment.execute(request, response)
);

export {treatmentsRoutes};