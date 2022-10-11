
import { IProductsRepository, ICreateProductDTO } from "@entity/products/IProductsRepository";
import { ProductRepository } from "@src/entity/products/ProductsRepository";
import { Response, Request, response } from "express";



class CreateProductUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: ICreateProductDTO = {
      categoriesId:   request.body.categoriesId,
      name:           request.body.name,
      numberStocke:   request.body.numberStocke,
      image:          request.body.image,
      quantityValue:  request.body.quantityValue,
      quantityUnit:   request.body.quantityUnit,
      value:          request.body.value,
    };

    const productRepository = new ProductRepository();

    const resp = await productRepository.create(data);

    return response.status(200).json(resp);
}
}

export { CreateProductUseCase };
