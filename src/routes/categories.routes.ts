import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createCategory, listCategories } from "@src/modules/categories";
import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.post("/", ensureIsAdmin, (request, response) =>
    createCategory.handle( request, response)
);

categoriesRoutes.get("/", (request, response) =>
    listCategories.handle( request, response)
);

export {categoriesRoutes}