import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { Collaborators } from "@src/entity/Collaborators/collaborators";
import { LubricationSystemServices } from "@src/entity/LubricationSystemServices/lubricationSystemServices";
import { Zones } from "../Zones/zones";


@Entity("ERs")
export class ERs{

    @PrimaryColumn()
    id: string

    @Column()
    number: number;

    @Column()
    zoneId: string

    @CreateDateColumn()
    createdAt: Date
    
  
    @ManyToOne(() => Zones, (zone) => zone.ers)
    zone: Zones;

    @OneToMany(() => LubricationSystemServices, (lubricationSystemServices) => lubricationSystemServices.ER)
    lubricationSystemServices: LubricationSystemServices[];



    constructor(){
        if(this.id === undefined){
            this.id = uuidv4();
        }        
    }
}