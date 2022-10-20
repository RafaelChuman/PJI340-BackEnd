import { Activities } from "../Activities/activities";
import { Collaborators } from "../Collaborators/collaborators";
import { ERs } from "../ERs/ERs";
import { LubricationSystemServices } from "./lubricationSystemServices";

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
  ): Promise<LubricationSystemServices>;
  // findById(id: string): User | undefined;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<LubricationSystemServices[]>;
}

export {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
};
