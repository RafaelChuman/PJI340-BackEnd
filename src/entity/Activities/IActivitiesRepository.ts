import { DeleteResult } from "typeorm";
import { Activities } from "./activities"

interface ICreateActivityDTO{
    name:string;
    
}
interface IDeleteActivityDTO{
    id:string;
}

interface IUpdateActivityDTO{
    id:string;
    name:string;
}

interface IActivitiesRepository{
    createActivity( activity:ICreateActivityDTO ): Promise<Activities>;
    deleteActivity( activity:IDeleteActivityDTO ): Promise<DeleteResult>;
    updateActivity( activity:IUpdateActivityDTO ): Promise<Activities | null>;
    listActivities():Promise<Activities[]>;
    
}

export {IActivitiesRepository, ICreateActivityDTO, IUpdateActivityDTO, IDeleteActivityDTO}