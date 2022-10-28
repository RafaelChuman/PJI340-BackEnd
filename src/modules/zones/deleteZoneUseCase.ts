import { IDeleteZoneDTO } from "@src/entity/Zones/IZonesRepository";
import { ZonesRepository } from "@src/entity/Zones/ZonesRepository";
import { Response, Request, response } from "express";

class DeleteZoneUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam = request.query.id;
    
    if (typeof idParam == "string") {
      const data: IDeleteZoneDTO = { id: idParam };
      console.log(data);

      const zoneRepository = new ZonesRepository();

      const resp = await zoneRepository.deleteZone(data);

      return response.status(200).json(resp);
    }

    return response.status(200);
  }
}

export { DeleteZoneUseCase };
