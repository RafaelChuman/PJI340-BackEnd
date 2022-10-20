import { CreateLubricationSystemService } from "./createLubricationSystemSerivce";
import { ListLubricationSystemServices } from "./listLubricationSystemService";

const createLubricationSystemService = new CreateLubricationSystemService();
const listLubricationSystemServices = new ListLubricationSystemServices();

export { createLubricationSystemService, listLubricationSystemServices };
