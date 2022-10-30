import {  CreateActivityUseCase } from "./createActivityUseCase"
import { DeleteActivityUseCase } from "./deleteActivityUseCase";
import {  ListActivitiesUseCase } from "./listActivitiesUseCase";

const createActivity = new CreateActivityUseCase();
const listActivities = new ListActivitiesUseCase();
const deleteActivity = new DeleteActivityUseCase();

export {createActivity, listActivities, deleteActivity}
