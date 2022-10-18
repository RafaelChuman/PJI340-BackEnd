import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { LubricationSystemServices } from "../LubricationSystemServices/lubricationSystemServices";
import { ERs } from "../ERs/ERs";

@Entity("Zones")
export class Zones
{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> ERs, (ers) => ers.zone)
    ers: ERs[]

    constructor()
    {
        if(!this.id)
        {
            this.id = uuidv4();
        }
    }
}