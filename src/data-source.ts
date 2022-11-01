import { Users } from "@src/entity/Users/Users";
import { DataSource } from "typeorm";
import { Activities } from "@src/entity/Activities/activities";
import { Collaborators } from "./entity/Collaborators/collaborators";
import { Zones } from "./entity/Zones/zones";
import { LubrificationSystemServices } from "./entity/LubricationSystemServices/lubrificationSystemServices";
import { ERs } from "./entity/ERs/ERs";

export const PostgresDS = new DataSource({
    //migrationsTableName: 'migrations-prod',
    type: "postgres",
    //host: "ec2-52-204-195-41.compute-1.amazonaws.com",
    host: "127.0.0.1",
    port: 5432,
    // username: "komalpclvkhwde",
    // password: "3d2807ce80a01e796427cf2b22085899b10b1260778d97cbdfcac8f3242e0946",
    // database: "dcv7lr3ha5uogf",
    //
    username: "docker",
    password: "test",
    database: "pji340",
    name: "default",
    entities: [Users, Collaborators, Activities, Zones, ERs, LubrificationSystemServices],
    migrations: ["./src/migration/*.m.ts"],
    //ssl:{rejectUnauthorized:false}
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


 


 