import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Request, Response } from "express";

export class ListLubricationSystemServices {
  async execute(request: Request, response: Response): Promise<Response> {
    const groupByMonth = request.query?.groupByMonth;
    const dateOfNewTreatment = request.query?.dateOfNewTreatment;

    const lubricationSystemServicesRespository = new LubricationSystemServicesRepository();

   
      const lubricationSystemServices =
        await lubricationSystemServicesRespository.list();

    return response.status(200).json(lubricationSystemServices);
  }
}
