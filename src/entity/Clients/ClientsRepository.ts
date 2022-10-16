import { PostgresDS } from "@src/data-source";
import { nodeModuleNameResolver } from "typescript";
import { ICreateClientDTO, IClientRepository } from "./IClientsRepository";
import { Clients } from "./Clients";
import { Raw } from "typeorm";

class ClientsRepository implements IClientRepository {
  async create(data: ICreateClientDTO): Promise<Clients> {
    const client = new Clients();

    client.name = data.name;
    client.cep = data.cep;
    client.numberAddress = data.numberAddress;
    client.cellphone = data.cellphone;
    client.whatsApp = data.whatsApp;

    await PostgresDS.manager.save(client);

    return client;
  }

  async list(): Promise<Clients[]> {
    const clients = await PostgresDS.manager.find(Clients);

    return clients;
  }

  async listAllClientsGroupedByMonth(): Promise<Clients[]> {
    const query = PostgresDS.manager.createQueryBuilder(Clients, "Clients")
    .select(`count(id), DATE_TRUNC('month', "created_at")`)
    .where(`date_part('year', created_at) = date_part('year', CURRENT_DATE)`)
    .groupBy(`DATE_TRUNC('month', "created_at")`)

    // const Client = await PostgresDS.manager.findBy(Client, {
    const Client = await query.execute();
    
    
    //   created_at: Raw((alias) => `${alias} > :date`, {
    //     date: `${today.getFullYear()}-${today.getMonth()}-01`,
    //   }),
    // });

    return Client;
  }

  async findByClientName(nameParm: string): Promise<Clients | null> {
    const client = await PostgresDS.manager.findOneBy(Clients, {
      name: nameParm,
    });

    return client;
  }

  async findById(idParm: string): Promise<Clients | null> {
    const client = await PostgresDS.manager.findOneBy(Clients, {
      id: idParm,
    });

    return client;
  }
}

export { ClientsRepository };
