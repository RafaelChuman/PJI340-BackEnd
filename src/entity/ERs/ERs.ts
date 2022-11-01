import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { Collaborators } from "@src/entity/Collaborators/collaborators";
import { LubrificationSystemServices } from "@src/entity/LubricationSystemServices/lubrificationSystemServices";
import { Zones } from "../Zones/zones";


@Entity("ERs")
export class ERs{

    @PrimaryColumn()
    id: string

    @Column()
    number: number;

    @CreateDateColumn()
    createdAt: Date
    
  
    @ManyToOne(() => Zones, (zone) => zone.ers)
    zone: Zones;

    @OneToMany(() => LubrificationSystemServices, (lubricationSystemServices) => lubricationSystemServices.er)
    lubrificationSystemServices: LubrificationSystemServices[];



    constructor(){
        if(this.id === undefined){
            this.id = uuidv4();
        }        
    }
}