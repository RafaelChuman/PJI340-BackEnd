import { ClientsRepository } from "@src/entity/Collaborators/collaboratorsRepository";
import { AppError } from "@src/errors/AppError";
import { Response, Request } from "express";

class ListClientUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const clientRespository = new ClientsRepository();
    const clientName = request.query?.ClientName;
    const groupByMonth = request.query?.groupByMonth;

    if (clientName) {
      if (typeof clientName === "string") {
        const Client = await clientRespository.findByClientName(clientName);

        return response.status(200).json(Client);
      }
    }

    if (groupByMonth) {
      // if(monthFormatDate <0 || monthFormatDate > 12) throw new AppError("Parâmetros Incorretos", 400)

      const Clients = await clientRespository.listAllClientsGroupedByMonth();

      return response.status(200).json(Clients);
    }
    const Clients = await clientRespository.list();

    return response.status(201).json(Clients);
  }
}

export { ListClientUseCase };
