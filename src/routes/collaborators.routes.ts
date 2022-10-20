import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createCollaboratorUseCase, listCollaboratorUseCase } from "@src/modules/collaborators";
import { response, request, Router } from "express";

const collaboratorsRoutes = Router();

collaboratorsRoutes.post("/", (request, response) => {
  createCollaboratorUseCase.execute(request, response);
});

collaboratorsRoutes.get("/", (request, response) => {
  listCollaboratorUseCase.execute(request, response);
});

export { collaboratorsRoutes };
