import { PostgresDS } from "@src/data-source";
import {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
} from "./ILubricationSystemServicesRepository";
import { LubricationSystemServices } from "./lubricationSystemServices";

class LubricationSystemServicesRepository
  implements ILubricationSystemServicesRepository
{
  async create(
    data: ICreateLubricationSystemServiceDTO
  ): Promise<LubricationSystemServices> {
    const product = new LubricationSystemServices();

    product.activity = data.activity;
    product.add = data.add;
    product.obs = data.obs;
    product.collaborator = data.collaborator;

    await PostgresDS.manager.save(product);

    return product;
  }

  async list(): Promise<LubricationSystemServices[]> {
    //const products = await PostgresDS.manager.find(LubricationSystemServices);
    const query = PostgresDS.manager
      .createQueryBuilder<LubricationSystemServices>("LubricationSystemServices", "l")
      .innerJoinAndSelect("l.collaborator", "c")
      .innerJoinAndSelect("l.activity", "a"); 

    const result = await query.getMany();

    return result;
  }
}

export { LubricationSystemServicesRepository };
