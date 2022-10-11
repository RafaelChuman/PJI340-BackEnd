import { Categories } from "@src/entity/categories/categories";
import { CategoriesRepository } from "@src/entity/categories/categoriesRepository";
import { ICreateCategoryDTO } from "@src/entity/categories/ICategoriesRepository";
import {Request, Response} from "express";

class CreateCategory{

    async handle(request: Request, response: Response): Promise<Response> {

        const data: ICreateCategoryDTO = {
            name: request.body.name
        };

        const categoryRepository = new CategoriesRepository();

        const resp = await categoryRepository.createCategory(data);
        return response.status(200).json(resp);
    }


}

export {CreateCategory}