import { PostgresDS } from "@src/data-source";
import {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
} from "./ILubrificationSystemServicesRepository";
import { LubrificationSystemServices } from "./lubrificationSystemServices";

class LubricationSystemServicesRepository
  implements ILubricationSystemServicesRepository
{
  async create(
    data: ICreateLubricationSystemServiceDTO
  ): Promise<LubrificationSystemServices> {
    const product = new LubrificationSystemServices();

    product.activity = data.activity;
    product.add = data.add;
    product.obs = data.obs;
    product.collaborator = data.collaborator;

    await PostgresDS.manager.save(product);

    return product;
  }

  async list(): Promise<LubrificationSystemServices[]> {
    //const products = await PostgresDS.manager.find(LubricationSystemServices);
    //const result = await PostgresDS.manager.find(LubricationSystemServices);

    const LubricationSystemServicesRepository =
     PostgresDS.manager.getRepository(LubrificationSystemServices);

    const result = await LubricationSystemServicesRepository.find({
      relations: {
        activity: false,
        collaborator: false,
      },
    });
    // const query = PostgresDS.manager
    //   .createQueryBuilder<LubricationSystemServices>("LubricationSystemServices", "l")
    //   .innerJoinAndSelect("l.collaborator", "c")
    //   .innerJoinAndSelect("l.activity", "a");

    //const result = await query.getMany();

    return result;
  }
}

export { LubricationSystemServicesRepository };
