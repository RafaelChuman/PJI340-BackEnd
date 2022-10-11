import { CreateProductUseCase } from "./createProductUseCase";
import { ListProductUseCase } from "./listProductUseCase";




const createProductUseCase = new CreateProductUseCase();
const listProductUseCase = new ListProductUseCase();

export {createProductUseCase, listProductUseCase}

