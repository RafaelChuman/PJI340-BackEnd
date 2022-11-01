import { DeleteResult } from "typeorm";
import { LubricationSystemServices } from "../LubricationSystemServices/lubrificationSystemServices";
import { Zones } from "../Zones/zones";
import { ERs } from "./ERs";

interface ICreateERDTO{
    number: number;
    zone: Zones;
    lubricationSystemServices: LubricationSystemServices[];
};

interface IListERByZoneId{
    zoneId: string;
}

interface IDeleteERDTO{
    id: string;
    productId?: string;
};

interface IERsRepository{
    
    createER(data: ICreateERDTO): Promise<ERs>;
    listER(): Promise<ERs[]|undefined>;
    listERByZoneId(data: IListERByZoneId): Promise<ERs[] | null>;
    deleteERById(data: IDeleteERDTO): Promise<DeleteResult>;
    listAllERsGroupedByMonth(): Promise<ERs[]>;
    listAllERsProductToBuy(data:Date): Promise<ERs[]>;
    
};

export {IERsRepository, ICreateERDTO, IListERByZoneId, IDeleteERDTO};