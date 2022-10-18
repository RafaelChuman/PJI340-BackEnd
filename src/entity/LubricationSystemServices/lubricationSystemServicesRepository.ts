
import { PostgresDS } from "@src/data-source";
import { ILubricationSystemServicesRepository, ICreateLubricationSystemServiceDTO } from "./ILubricationSystemServicesRepository";
import { LubricationSystemServices } from "./lubricationSystemServices";

class LubricationSystemServicesReposiory implements ILubricationSystemServicesRepository{

  async create(data: ICreateLubricationSystemServiceDTO): Promise<LubricationSystemServices> {

    const product = new LubricationSystemServices();

    
    product.activity =        data.activities;
    product.add =             data.add;
    product.obs =             data.obs;
    product.collaborator =   data.collaborators;
    
    await PostgresDS.manager.save(product);

    return product;
  }

  async list(): Promise<LubricationSystemServices[]> {
    //const products = await PostgresDS.manager.find(LubricationSystemServices);
    const query = PostgresDS.manager.createQueryBuilder<LubricationSystemServices>('LubricationSystemServices', 'p').innerJoinAndSelect('p.category', 'w'); // 'w.userId = u.id' may be omitted
    
    const result = await query.getMany();

    return result;
  }
}

export { LubricationSystemServicesReposiory };
