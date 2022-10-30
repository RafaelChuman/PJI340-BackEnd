import { DeleteResult } from "typeorm";
import { Collaborators } from "./collaborators";

interface ICreateCollaboratorDTO {
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}

interface IDeleteCollaboratorDTO {
  id: string;
}




interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<Collaborators>;
  findByCollaboratorName(CollaboratorName: string): Promise<Collaborators | null>;
  // findByEmail(email: string): Collaborator | undefined;
  // turnAdmin(Collaborator: Collaborator): Collaborator;
  list(): Promise<Collaborators[]>;
  findById(IdParm: string): Promise<Collaborators | null>;

  deleteById(data: IDeleteCollaboratorDTO): Promise<DeleteResult>;

  listAllCollaboratorsGroupedByMonth(): Promise<Collaborators[]>;
}

export { ICollaboratorsRepository, ICreateCollaboratorDTO, IDeleteCollaboratorDTO};
