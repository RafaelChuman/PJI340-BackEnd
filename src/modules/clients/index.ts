import { CreateClientUseCase } from "./CreateClientUseCase";
import { ListClientUseCase } from "./ListClientUseCase";



const listClientUseCase = new ListClientUseCase()
const createClientUseCase = new CreateClientUseCase();

export{
    listClientUseCase, 
    createClientUseCase,
}