import { ICreatTreatmentDTO } from "@src/entity/ERs/IERsRepository";
import { TreatmentsRepository } from "@src/entity/ERs/ERsRepository";
import { Request, Response } from "express";
import { v4 as uuidv4} from "uuid";


export class CreateTreatment{
    async execute(request:Request, response: Response):Promise<Response> {

        const treatmentsRespository = new TreatmentsRepository();
        const datas:ICreatTreatmentDTO[] = request.body.products;

        datas.forEach(async data => {
            const newTreatment:ICreatTreatmentDTO = {
                treatmentsId:               request.body.treatmentsId,
                clientsId:                  request.body.clientsId,
                productsId:                 data.productsId,
                quantityOfProduct:          data.quantityOfProduct,
                quantityOfProductPerDay:    data.quantityOfProductPerDay
            };

            await treatmentsRespository.createTreatment(newTreatment);   
        }); 

        return response.status(200).json("");
    }
}