import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createClientUseCase, listClientUseCase } from "@src/modules/clients";
import { response, request, Router } from "express";

const clientsRoutes = Router();

clientsRoutes.post("/", (request, response) => {
  createClientUseCase.execute(request, response);
});

clientsRoutes.get("/", (request, response) => {
  listClientUseCase.execute(request, response);
});

export { clientsRoutes };
