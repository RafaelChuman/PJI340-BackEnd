import { CreateCollaboratorUseCase } from "./createCollaboratorUseCase";
import { ListCollaboratorUseCase } from "./listCollaboratorUseCase";



const listCollaboratorUseCase = new ListCollaboratorUseCase()
const createCollaboratorUseCase = new CreateCollaboratorUseCase();

export{
    listCollaboratorUseCase, 
    createCollaboratorUseCase,
}