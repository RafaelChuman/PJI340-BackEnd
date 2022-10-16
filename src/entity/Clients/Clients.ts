import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { Treatments } from "@entity/treatments/Treatments";

@Entity("Clients")
export class Clients {

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
    created_at: Date

    @OneToMany(()=>Treatments, treatments => treatments.clientsId)
    treatments: Treatments[];

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}



