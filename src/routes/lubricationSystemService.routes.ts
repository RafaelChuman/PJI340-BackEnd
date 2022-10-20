import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createLubricationSystemService, listLubricationSystemServices } from "@src/modules/lubricationSystemServices";
import { request, Request, Response, Router } from "express";


const lubricationSystemServicesRoutes = Router();

lubricationSystemServicesRoutes.post("/", ensureIsAdmin, (request, response) => 
    createLubricationSystemService.execute(request, response)
);

lubricationSystemServicesRoutes.get("/", (request, response) => 
    listLubricationSystemServices.execute(request, response)
);

export {lubricationSystemServicesRoutes};