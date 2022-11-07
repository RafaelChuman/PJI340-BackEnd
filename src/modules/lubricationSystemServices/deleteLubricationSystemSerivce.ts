import { IDeleteLubricationSystemServiceDTO } from "@src/entity/LubricationSystemServices/ILubrificationSystemServicesRepository";
import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export class DeleteLubricationSystemService {
  async execute(request: Request, response: Response): Promise<Response> {
    const lubricationSystemServiceRespository =
      new LubricationSystemServicesRepository();

    const idParam = request.query.id;

    if (typeof idParam == "string") {
      const data: IDeleteLubricationSystemServiceDTO = {
        id: idParam,
      };

    console.log(data)

    const resp = await lubricationSystemServiceRespository.deleteById(data);

    return response.status(200).json(resp);
    }
    return response.status(200);
  }
}
