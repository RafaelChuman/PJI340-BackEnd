import { PostgresDS } from "@src/data-source";
import { nodeModuleNameResolver } from "typescript";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";
import { Users } from "./Users";
import { Raw } from "typeorm";

class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<Users> {
    const user = new Users();

    user.name = data.name;
    user.userName = data.userName;
    user.password = data.password;
    user.cep = data.cep;
    user.numberAddress = data.numberAddress;
    user.cellphone = data.cellphone;
    user.whatsApp = data.whatsApp;

    await PostgresDS.manager.save(user);

    return user;
  }

  async list(): Promise<Users[]> {
    const users = await PostgresDS.manager.find(Users);

    return users;
  }

  async listAllUsersGroupedByMonth(): Promise<Users[]> {
    const query = PostgresDS.manager.createQueryBuilder(Users, "Users")
    .select(`count(id), DATE_TRUNC('month', "created_at")`)
    .where(`date_part('year', created_at) = date_part('year', CURRENT_DATE)`)
    .groupBy(`DATE_TRUNC('month', "created_at")`)

    // const users = await PostgresDS.manager.findBy(Users, {
    const users = await query.execute();
    
    
    //   created_at: Raw((alias) => `${alias} > :date`, {
    //     date: `${today.getFullYear()}-${today.getMonth()}-01`,
    //   }),
    // });

    return users;
  }

  async findByUserName(userNameParm: string): Promise<Users | null> {
    const user = await PostgresDS.manager.findOneBy(Users, {
      userName: userNameParm,
    });

    return user;
  }

  async findById(IdParm: string): Promise<Users | null> {
    const user = await PostgresDS.manager.findOneBy(Users, {
      id: IdParm,
    });

    return user;
  }
}

export { UsersRepository };
