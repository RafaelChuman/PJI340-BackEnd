import { CategoriesRepository } from "@src/entity/categories/categoriesRepository";
import { Response, Request } from "express";

class ListCategories {
    async handle(request: Request, response: Response): Promise<Response>{

        const categoriesRepository = new CategoriesRepository();

        const resp = await categoriesRepository.listCategories()

        return response.status(202).json(resp);
    }
}

export {ListCategories}