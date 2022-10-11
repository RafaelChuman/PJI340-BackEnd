import { Products } from "./Products";

interface ICreateProductDTO {
  categoriesId: string;
  name:string;
  numberStocke:number;
  image:string;
  quantityValue:number;
  quantityUnit:"ml" | "l" | "g" | "Kg" | "und",
  value:number;
}

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Products>;
  // findById(id: string): User | undefined;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<Products[]>;
}

export { IProductsRepository, ICreateProductDTO };
