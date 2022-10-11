import { PostgresDS } from "@src/data-source";
import { AppError } from "@src/errors/AppError";
import { DeleteResult } from "typeorm";
import { Categories } from "./categories";
import { ICategoriesRepository, ICreateCategoryDTO, IDeleteCategoryDTO, IUpdateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
    async listCategories(): Promise<Categories[]> {
        const categories = await PostgresDS.manager.find(Categories);
        
        return categories;
    }

    async createCategory(category: ICreateCategoryDTO): Promise<Categories> {
    
        const newCategory = new Categories();

        newCategory.name = category.name;

        await PostgresDS.manager.save(newCategory);
    
        return newCategory;
    }

    async deleteCategory(category: IDeleteCategoryDTO): Promise<DeleteResult> {
        
        return await PostgresDS.manager.delete(
            Categories, {
                id: category.id
            });
    }

    async updateCategory(category: IUpdateCategoryDTO): Promise<Categories | null> {
        
        const updtCategory = await PostgresDS.manager.findOneBy(
            Categories, {
                id: category.id
            });
        
        if(!updtCategory) return null;

        updtCategory.name = category.name;

        await PostgresDS.manager.save(Categories, updtCategory);

        return updtCategory;
    }
}

export {CategoriesRepository}