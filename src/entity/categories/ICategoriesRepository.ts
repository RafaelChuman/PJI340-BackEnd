import { DeleteResult } from "typeorm";
import { Categories } from "./categories"

interface ICreateCategoryDTO{
    name:string;
    
}
interface IDeleteCategoryDTO{
    id:string;
}

interface IUpdateCategoryDTO{
    id:string;
    name:string;
}

interface ICategoriesRepository{
    createCategory( category:ICreateCategoryDTO ): Promise<Categories>;
    deleteCategory( category:IDeleteCategoryDTO ): Promise<DeleteResult>;
    updateCategory( category:IUpdateCategoryDTO ): Promise<Categories | null>;
    listCategories():Promise<Categories[]>;
    
}

export {ICategoriesRepository, ICreateCategoryDTO, IUpdateCategoryDTO, IDeleteCategoryDTO}