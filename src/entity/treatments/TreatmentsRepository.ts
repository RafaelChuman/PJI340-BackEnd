import { ICreatTreatmentDTO, IDeleteTreatmentDTO, IListTreatmentById, ITreatmentsRepository } from "./iTreatmentsRepository";
import { Treatments } from "./Treatments";
import {stringify, v4 as uuidv4} from "uuid";
import { PostgresDS } from "@src/data-source";
import { DeleteResult } from "typeorm";

export class TreatmentsRepository implements ITreatmentsRepository{
    async createTreatment(data: ICreatTreatmentDTO): Promise<Treatments> {
        
        const newTreatment = new Treatments();
        
        newTreatment.treatmentsId =             data.treatmentsId;
        newTreatment.productsId =               data.productsId;
        newTreatment.usersId =                  data.uersId;
        newTreatment.quantityOfProduct =        data.quantityOfProduct;
        newTreatment.quantityOfProductPerDay =  data.quantityOfProductPerDay;

        await PostgresDS.manager.save(newTreatment); 

        return newTreatment;
    }

    async listTreatmentById(data: IListTreatmentById): Promise<Treatments | null> {
        const treatment = await PostgresDS.manager.findOneBy(Treatments, {
            id: data.id
        });

        return treatment;
    }

    async listTreatmentByUserId(data: IListTreatmentById): Promise<Treatments[]> {
        const treatment = await PostgresDS.manager.findBy(Treatments, {
            usersId: data.id,
            isValid: data.isValid
        });

        return treatment;
    }

    async listAllTreatmentsProductToBuy(data:Date): Promise<Treatments[]> {
        const dateAsString = data.toISOString().slice(0, 10);

        const query = PostgresDS.manager.createQueryBuilder(Treatments, "t")   
        .innerJoinAndSelect('t.products', 'p')
        .innerJoinAndSelect('t.users', 'u')
        .where(`(('${dateAsString}'::date - "t"."createdAt"::date) * "t"."quantityOfProductPerDay") >=  ("t"."quantityOfProduct" * "p"."quantityValue")`)
        
    
    
        const treatments = await query.getMany();
        
    
        return treatments;
      }
     
    

  async listAllTreatmentsGroupedByMonth(): Promise<Treatments[]> {
    const query = PostgresDS.manager.createQueryBuilder(Treatments, "Treatments")
    .select(`count("treatmentsId"), DATE_TRUNC('month', "createdAt")`)
    .where(`date_part('year', "createdAt") = date_part('year', CURRENT_DATE)`)
    .groupBy(`DATE_TRUNC('month', "createdAt"), "treatmentsId"`)


    const treatments = await query.execute();
    

    return treatments;
  }

    async listTreatment(): Promise<Treatments[]|undefined> {
        //const treatments = await PostgresDS.manager.find(Treatments);
        const query = PostgresDS.manager.createQueryBuilder<Treatments>('Treatments', 't').innerJoinAndSelect('t.products', 'p').innerJoinAndSelect('t.users', 'u'); // 'w.userId = u.id' may be omitted
        const treatments = await query.getMany();

        return treatments;
    }

    async deleteTreatmentById(data: IDeleteTreatmentDTO): Promise<DeleteResult> {
        const deletedTreatment = await PostgresDS.manager.delete(Treatments, {
            id: data.id
        });

        return deletedTreatment;
    }

}