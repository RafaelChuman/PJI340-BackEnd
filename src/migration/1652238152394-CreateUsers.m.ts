import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateUsers1652238152394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
                {
                    name:"Users",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "userName",
                            type: "varchar",
                        },
                        {
                            name: "password",
                            type: "varchar",
                        },
                        {
                            name: "cep",
                            type: "varchar",
                        },
                        {
                            name: "numberAddress",
                            type: "varchar",
                        },     
                        {
                            name: "cellphone",
                            type: "varchar",
                        }, 
                        {
                            name: "whatsApp",
                            type: "varchar",
                        },   
                        {
                            name: "isAdmin",
                            type: "boolean",
                        },                                                            
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                })
        );

        await queryRunner.createIndex(
            "Users",
            new TableIndex({
                name: "IDX_USERS_NAME",
                columnNames: ["userName"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropIndex("Users", "IDX_USER_NAME");
        
        await queryRunner.dropTable("Users");

    }


}
