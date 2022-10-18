import { Activities } from "../Activities/activities";
import { Collaborators } from "../Collaborators/collaborators";
import { LubricationSystemServices } from "./lubricationSystemServices";

interface ICreateLubricationSystemServiceDTO {
  activities: Activities;
  add: number;
  obs: string;
  collaborators: Collaborators;
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
