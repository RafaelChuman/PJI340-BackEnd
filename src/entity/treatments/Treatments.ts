import { usersRoutes } from "@src/routes/users.routes";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidv4} from "uuid";
import { Users } from "@src/entity/Users/Users";
import { Products } from "@entity/products/Products";


@Entity("Treatments")
export class Treatments{

    @PrimaryColumn()
    id: string

    @Column()
    treatmentsId: string

    @Column()
    usersId: string;

    @Column()
    productsId: string;
    
    @ManyToOne(() => Users)
    @JoinColumn({name:"usersId"})
    users: Users;
    
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