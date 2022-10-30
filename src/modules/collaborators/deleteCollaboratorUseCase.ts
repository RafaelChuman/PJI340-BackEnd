import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { IDeleteCollaboratorDTO } from "@src/entity/Collaborators/ICollaboratorsRepository";
import { CollaboratorsRepository } from "@src/entity/Collaborators/collaboratorsRepository";

class DeleteCollaboratorUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam = request.query.id;

    if (typeof idParam == "string") {
      const data: IDeleteCollaboratorDTO = {
        id: idParam,
      };
      
      const collaboratorsRepository = new CollaboratorsRepository();

      const resp = await collaboratorsRepository.deleteById(data);

      return response.status(200).json(resp);
    }

    return response.status(200);
  }
}

export { DeleteCollaboratorUseCase };
