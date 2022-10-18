import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { LubricationSystemServices } from "../LubricationSystemServices/lubricationSystemServices";

@Entity("Collaborators")
export class Collaborators {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    cep: string

    @Column()
    numberAddress: string

    @Column()
    cellphone: string

    @Column()
    whatsApp: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=>LubricationSystemServices, lubrificationSystemServices => lubrificationSystemServices.collaborator)
    lubrificationSystemServices: LubricationSystemServices[];

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}



