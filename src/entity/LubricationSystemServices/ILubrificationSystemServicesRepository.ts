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

interface ILubricationSystemServicesRepository {
  create(
    data: ICreateLubricationSystemServiceDTO
  ): Promise<LubrificationSystemServices>;
  // findById(id: string): User | undefined;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<LubrificationSystemServices[]>;
}

export {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
};
