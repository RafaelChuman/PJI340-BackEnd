import { DeleteResult } from "typeorm";
import { Treatments } from "./Treatments";

interface ICreatTreatmentDTO{
    treatmentsId:string
    uersId: string;
    productsId: string;
    quantityOfProduct: number;
    quantityOfProductPerDay: number;
};

interface IListTreatmentById{
    id:string;
    isValid?:boolean;
}

interface IDeleteTreatmentDTO{
    id: string;
    productId?: string;
};

interface ITreatmentsRepository{
    
    createTreatment(data: ICreatTreatmentDTO): Promise<Treatments>;
    listTreatment(): Promise<Treatments[]|undefined>;
    listTreatmentById(data: IListTreatmentById): Promise<Treatments | null>;
    listTreatmentByUserId(data: IListTreatmentById): Promise<Treatments[] | null>;
    deleteTreatmentById(data: IDeleteTreatmentDTO): Promise<DeleteResult>;
    listAllTreatmentsGroupedByMonth(): Promise<Treatments[]>;
    listAllTreatmentsProductToBuy(data:Date): Promise<Treatments[]>;
    
};

export {ITreatmentsRepository, ICreatTreatmentDTO, IListTreatmentById, IDeleteTreatmentDTO};