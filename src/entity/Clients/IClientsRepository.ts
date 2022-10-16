import { Clients } from "./Clients";

interface ICreateClientDTO {
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}

interface IAuthenticateClientDTO{
  ClientName:string,
  password:string,
}

interface IClientTokenDTO{
  Client:{
    ClientName:string,
  },
  token: string,
}

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Clients>;
  findByClientName(ClientName: string): Promise<Clients | null>;
  // findByEmail(email: string): Client | undefined;
  // turnAdmin(Client: Client): Client;
  list(): Promise<Clients[]>;
  findById(IdParm: string): Promise<Clients | null>;
  listAllClientsGroupedByMonth(): Promise<Clients[]>;
}

export { IClientsRepository, ICreateClientDTO, IAuthenticateClientDTO, IClientTokenDTO };
