import { Products } from "@entity/products/Products";
import { Users } from "@src/entity/Users/Users";
import { DataSource } from "typeorm";
import { Categories } from "@entity/categories/categories";
import { Treatments } from "@entity/treatments/Treatments";

export const PostgresDS = new DataSource({
    //migrationsTableName: 'migrations-prod',
    type: "postgres",
    host: "ec2-52-204-195-41.compute-1.amazonaws.com",
    port: 5432,
    username: "komalpclvkhwde",
    password: "3d2807ce80a01e796427cf2b22085899b10b1260778d97cbdfcac8f3242e0946",
    database: "dcv7lr3ha5uogf",
    name: "default",
    entities: [Products, Users, Categories, Treatments],
    migrations: ["*.m.ts"],
    ssl:{rejectUnauthorized:false}
    //migrationsRun: false,
    //migrationsTransactionMode: "all",
    //synchronize:false
})


PostgresDS.initialize()
    .then(() => {

        console.log(PostgresDS.options.migrations)
        console.log(PostgresDS.migrations.length)

        console.log("Database Initialized");
    })
    .catch((error) => console.log(error))


 


 