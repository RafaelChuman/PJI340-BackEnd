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
    host: "pji340.cl4aerfsoi1q.us-east-1.rds.amazonaws.com",
    //host: "127.0.0.1",
    port: 5432,
    username: "postgres",
    password: "pji340_univesp!",
    database: "postgres",
    //
    // username: "docker",
    // password: "test",
    // database: "pji340",
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


 


 