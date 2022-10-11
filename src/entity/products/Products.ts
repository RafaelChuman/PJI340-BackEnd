
import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Categories } from "@entity/categories/categories";
import { Treatments } from "@entity/treatments/Treatments";

@Entity("Products")
export class Products {

    @PrimaryColumn()
    id: string;
    
    @Column()
    name:string;
    
    @Column()
    numberStocke:number;
    
    @Column()
    image:string;
    
    @Column()
    quantityValue:number;

    @Column()
    quantityUnit:string;

    @Column()
    categoriesId: string;
    
    @Column()
    value:number;

    @ManyToOne(() => Categories)
    @JoinColumn({name:"categoriesId"})
    category: Categories;  

    @OneToMany(() => Treatments, treatments => treatments.productsId)
    treatments: Treatments[];



    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}




