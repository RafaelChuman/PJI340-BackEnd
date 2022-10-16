import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { Clients } from "@src/entity/Clients/Clients";
import { Products } from "@entity/products/Products";


@Entity("Treatments")
export class Treatments{

    @PrimaryColumn()
    id: string

    @Column()
    treatmentsId: string

    @Column()
    clientsId: string;

    @Column()
    productsId: string;
    
    @ManyToOne(() => Clients)
    @JoinColumn({name:"clientsId"})
    clients: Clients;
    
    @ManyToOne(() => Products)
    @JoinColumn({name:"productsId"})
    products: Products;

    //Quantity of product is allways in ml or g
    @Column()
    quantityOfProduct: number

    //Quantity of product is allways in ml or g
    @Column()
    quantityOfProductPerDay: number

    @CreateDateColumn()
    createdAt: Date

    @Column()
    isValid: boolean

    constructor(){
        if(this.id === undefined){
            this.id = uuidv4();
            this.isValid = true;
        }        
    }
}