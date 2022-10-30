import { CreateCollaboratorUseCase } from "./createCollaboratorUseCase";
import { DeleteCollaboratorUseCase } from "./deleteCollaboratorUseCase";
import { ListCollaboratorUseCase } from "./listCollaboratorUseCase";



const listCollaboratorUseCase = new ListCollaboratorUseCase()
const createCollaboratorUseCase = new CreateCollaboratorUseCase();
const deleteCollaboratorUseCase = new DeleteCollaboratorUseCase();

export{
    listCollaboratorUseCase, 
    createCollaboratorUseCase,
    deleteCollaboratorUseCase
}