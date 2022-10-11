import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { ICreateUserDTO } from "@src/entity/Users/IUsersRepository";
import { UsersRepository } from "@src/entity/Users/UsersRepository";

class CreateUserUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: ICreateUserDTO = {
      cellphone: request.body.cellphone,
      cep: request.body.cep,
      name: request.body.name,
      numberAddress: request.body.numberAddress,
      whatsApp: request.body.whatsApp,
      password: request.body.password,
      userName: request.body.userName,
    };
    const usersRepository = new UsersRepository();

    if (!data.password || !data.userName) {
      data.password = data.name.toLowerCase().replace(" ", "");
      data.userName = data.name.toLowerCase().replace(" ", "");
    }

    const userNameAlredyExist = await usersRepository.findByUserName(data.userName);

    if (userNameAlredyExist) {
      throw new AppError("User Already Exists.");
    }

    const passwordHash = await hash(data.password, 8);

    data.password = passwordHash;

    const resp = await usersRepository.create(data);

    return response.status(200).json(resp);
  }
}

export { CreateUserUseCase };
