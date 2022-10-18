import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { ICreateClientDTO } from "@src/entity/Collaborators/ICollaboratorsRepository";
import { ClientsRepository } from "@src/entity/Collaborators/collaboratorsRepository";

class CreateClientUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: ICreateClientDTO = {
      cellphone: request.body.cellphone,
      cep: request.body.cep,
      name: request.body.name,
      numberAddress: request.body.numberAddress,
      whatsApp: request.body.whatsApp,
    };
    const clientsRepository = new ClientsRepository();

    const clientNameAlredyExist = await clientsRepository.findByClientName(data.name);

    if (clientNameAlredyExist) {
      throw new AppError("Client Already Exists.");
    }

    const resp = await clientsRepository.create(data);

    return response.status(200).json(resp);
  }
}

export { CreateClientUseCase };
