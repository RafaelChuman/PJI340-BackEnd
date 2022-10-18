import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { LubricationSystemServices } from "../LubricationSystemServices/lubricationSystemServices";

@Entity("Activities")
export class Activities
{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> LubricationSystemServices, (lubricationSystemServices) => lubricationSystemServices.activity)
    lubricationSystemServices: LubricationSystemServices[]

    constructor()
    {
        if(!this.id)
        {
            this.id = uuidv4();
        }
    }
}