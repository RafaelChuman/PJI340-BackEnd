import { DeleteResult } from "typeorm";
import { Zones } from "./zones"

interface ICreateZoneDTO{
    name:string;    
}
interface IDeleteZoneDTO{
    id:string | undefined;
}

interface IUpdateZoneDTO{
    id:string;
    name:string;
}

interface IZonesRepository{
    createZone( zone:ICreateZoneDTO ): Promise<Zones>;
    deleteZone( zone:IDeleteZoneDTO ): Promise<DeleteResult>;
    updateZone( zone:IUpdateZoneDTO ): Promise<Zones | null>;
    listZones():Promise<Zones[]>;
    
}

export {IZonesRepository, ICreateZoneDTO, IUpdateZoneDTO, IDeleteZoneDTO}