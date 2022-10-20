import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {ICreateERDTO} from "@entity/ERs/IERsRepository"
import { ERsRepository } from "@src/entity/ERs/ERsRepository";

export class CreateER {
  async execute(request: Request, response: Response): Promise<Response> {
    const erRespository = new ERsRepository();
    const datas: ICreateERDTO = request.body.ers;

    await erRespository.createER(datas);

    return response.status(200).json("");
  }
}
