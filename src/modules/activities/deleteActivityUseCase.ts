import { ActivitiesRepository } from "@src/entity/Activities/activitiesRepository";
import { IDeleteActivityDTO } from "@src/entity/Activities/IActivitiesRepository";
import { Response, Request } from "express";

class DeleteActivityUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam = request.query.id;

    if (typeof idParam == "string") {
      const data: IDeleteActivityDTO = {
        id: idParam,
      };
      
      const collaboratorsRepository = new ActivitiesRepository();

      const resp = await collaboratorsRepository.deleteActivityById(data);

      return response.status(200).json(resp);
    }

    return response.status(200);
  }
}

export { DeleteActivityUseCase };
