import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Products } from "../products/Products";

@Entity("Categories")
export class Categories
{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> Products, (products) => products.categoriesId)
    products: Products[]

    constructor()
    {
        if(!this.id)
        {
            this.id = uuidv4();
        }
    }
}