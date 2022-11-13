import { PostgresDS } from "@src/data-source";
import { DeleteQueryBuilder, DeleteResult } from "typeorm";
import {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
  IDeleteLubricationSystemServiceDTO,
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
    product.er = data.er;

    await PostgresDS.manager.save(product);

    return product;
  }

  async list(ERId: string): Promise<LubrificationSystemServices[]> {
    //const products = await PostgresDS.manager.find(LubricationSystemServices);
    //const result = await PostgresDS.manager.find(LubricationSystemServices);

    const LubricationSystemServicesRepository =
      PostgresDS.manager.getRepository(LubrificationSystemServices);

    const result = await LubricationSystemServicesRepository.find({
      relations: {
        activity: true,
        collaborator: true,
        er: true,
      },
      where: {
        er: {
          id: ERId,
        },
      },
    });
    // const query = PostgresDS.manager
    //   .createQueryBuilder<LubricationSystemServices>("LubricationSystemServices", "l")
    //   .innerJoinAndSelect("l.collaborator", "c")
    //   .innerJoinAndSelect("l.activity", "a");

    //const result = await query.getMany();

    return result;
  }
  async deleteById(
    data: IDeleteLubricationSystemServiceDTO
  ): Promise<DeleteResult> {
    const LubricationSystemServicesRepository =
      PostgresDS.manager.getRepository(LubrificationSystemServices);

    console.log(data.id);
    const result = await LubricationSystemServicesRepository.delete({
      id: data.id,
    });
    console.log(result);

    return result;
  }
}

export { LubricationSystemServicesRepository };
