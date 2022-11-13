import { DeleteQueryBuilder, DeleteResult } from "typeorm";
import { Activities } from "../Activities/activities";
import { Collaborators } from "../Collaborators/collaborators";
import { ERs } from "../ERs/ERs";
import { LubrificationSystemServices } from "./lubrificationSystemServices";

interface ICreateLubricationSystemServiceDTO {
  activity: Activities;
  add: number;
  obs: string;
  collaborator: Collaborators;
  er: ERs;
}

interface IDeleteLubricationSystemServiceDTO {
  id: string;
}

interface ILubricationSystemServicesRepository {
  create(
    data: ICreateLubricationSystemServiceDTO
  ): Promise<LubrificationSystemServices>;
  // findById(id: string): User | undefined;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  deleteById(data: IDeleteLubricationSystemServiceDTO): Promise<DeleteResult>;
  list(ERId:string): Promise<LubrificationSystemServices[]>;
}

export {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
  IDeleteLubricationSystemServiceDTO,
};
