import {
  ICreatERDTO,
  IDeleteERDTO,
  IERsRepository,
  IListERByZoneId,
} from "./IERsRepository";
import { ERs } from "./ERs";
import { PostgresDS } from "@src/data-source";
import { DeleteResult } from "typeorm";

export class ERsRepository implements IERsRepository {
  async createER(data: ICreatERDTO): Promise<ERs> {
    const newER = new ERs();

    newER.number = data.number;
    newER.zone = data.zone;

    await PostgresDS.manager.save(newER);

    return newER;
  }

  async listERByZoneId(data: IListERByZoneId): Promise<ERs[] | null>{
    const er = await PostgresDS.manager.findBy(ERs, {
      zoneId: data.zoneId,
    });

    return er;
  }

  async listAllERsProductToBuy(data: Date): Promise<ERs[]> {
    const dateAsString = data.toISOString().slice(0, 10);

    const query = PostgresDS.manager
      .createQueryBuilder(ERs, "t")
      .innerJoinAndSelect("t.products", "p")
      .innerJoinAndSelect("t.clients", "c")
      .where(
        `(('${dateAsString}'::date - "t"."createdAt"::date) * "t"."quantityOfProductPerDay") >=  ("t"."quantityOfProduct" * "p"."quantityValue")`
      );

    const ers = await query.getMany();

    return ers;
  }

  async listAllERsGroupedByMonth(): Promise<ERs[]> {
    const query = PostgresDS.manager
      .createQueryBuilder(ERs, "ERs")
      .select(`count("ersId"), DATE_TRUNC('month', "createdAt")`)
      .where(`date_part('year', "createdAt") = date_part('year', CURRENT_DATE)`)
      .groupBy(`DATE_TRUNC('month', "createdAt"), "ersId"`);

    const ers = await query.execute();

    return ers;
  }

  async listER(): Promise<ERs[] | undefined> {
    //const ers = await PostgresDS.manager.find(ERs);
    const query = PostgresDS.manager
      .createQueryBuilder<ERs>("ERs", "t")
      .innerJoinAndSelect("t.products", "p")
      .innerJoinAndSelect("t.clients", "c"); // 'w.userId = u.id' may be omitted
    const ers = await query.getMany();

    return ers;
  }

  async deleteERById(data: IDeleteERDTO): Promise<DeleteResult> {
    const deletedER = await PostgresDS.manager.delete(ERs, {
      id: data.id,
    });

    return deletedER;
  }
}
