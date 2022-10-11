import { Products } from "@entity/products/Products";
import { ProductRepository } from "@entity/products/ProductsRepository";
import { Response, Request } from "express";



class ListProductUseCase{

    async execute(request: Request, response: Response): Promise<Response>{
        const productRepository = new ProductRepository();

        const resp = await productRepository.list();
        
        return response.status(200).json(resp);
    }

}

export {ListProductUseCase}