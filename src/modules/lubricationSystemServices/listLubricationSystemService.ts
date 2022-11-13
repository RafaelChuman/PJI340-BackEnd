import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Request, Response } from "express";

export class ListLubricationSystemServices {
  async execute(request: Request, response: Response): Promise<Response> {
    const temp = request.query.id;

    if (typeof temp == "string") {
      const ERId = temp;

      const lubricationSystemServicesRespository =
        new LubricationSystemServicesRepository();

      const lubricationSystemServices =
        await lubricationSystemServicesRespository.list(ERId);

      return response.status(200).json(lubricationSystemServices);
    }
    return response.status(200).json();
  }
}
