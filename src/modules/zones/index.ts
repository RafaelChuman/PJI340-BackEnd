import { CreateZoneUseCase } from "./createZoneUseCase";
import { DeleteZoneUseCase } from "./deleteZoneUseCase";
import { ListZoneUseCase } from "./listZoneUseCase";




const createZoneUseCase = new CreateZoneUseCase();
const listZoneUseCase = new ListZoneUseCase();
const deleteZoneUseCase = new DeleteZoneUseCase();

export {createZoneUseCase, listZoneUseCase, deleteZoneUseCase}

