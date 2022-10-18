import { PostgresDS } from "@src/data-source";
import { ICreateCollaboratorDTO, ICollaboratorsRepository } from "./ICollaboratorsRepository";
import { Collaborators } from "./collaborators";

class CollaboratorsRepository implements ICollaboratorsRepository {
  async create(data: ICreateCollaboratorDTO): Promise<Collaborators> {
    const collaborator = new Collaborators();

    collaborator.name = data.name;
    collaborator.cep = data.cep;
    collaborator.numberAddress = data.numberAddress;
    collaborator.cellphone = data.cellphone;
    collaborator.whatsApp = data.whatsApp;

    await PostgresDS.manager.save(collaborator);

    return collaborator;
  }

  async list(): Promise<Collaborators[]> {
    const collaborators = await PostgresDS.manager.find(Collaborators);

    return collaborators;
  }

  async listAllCollaboratorsGroupedByMonth(): Promise<Collaborators[]> {
    const query = PostgresDS.manager.createQueryBuilder(Collaborators, "Collaborators")
    .select(`count(id), DATE_TRUNC('month', "createdAt")`)
    .where(`date_part('year', createdAt) = date_part('year', CURRENT_DATE)`)
    .groupBy(`DATE_TRUNC('month', "createdAt")`)

    // const Collaborator = await PostgresDS.manager.findBy(Collaborator, {
    const Collaborator = await query.execute();
    
    
    //   createdAt: Raw((alias) => `${alias} > :date`, {
    //     date: `${today.getFullYear()}-${today.getMonth()}-01`,
    //   }),
    // });

    return Collaborator;
  }

  async findByCollaboratorName(nameParm: string): Promise<Collaborators | null> {
    const collaborator = await PostgresDS.manager.findOneBy(Collaborators, {
      name: nameParm,
    });

    return collaborator;
  }

  async findById(idParm: string): Promise<Collaborators | null> {
    const collaborator = await PostgresDS.manager.findOneBy(Collaborators, {
      id: idParm,
    });

    return collaborator;
  }
}

export { CollaboratorsRepository };
