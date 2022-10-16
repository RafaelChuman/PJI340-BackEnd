import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateClients1652238152394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
                {
                    name:"Clients",
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
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                })
        );

        await queryRunner.createIndex(
            "Clients",
            new TableIndex({
                name: "IDX_CLIENTS_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropIndex("Clients", "IDX_CLIENTS_NAME");
        
        await queryRunner.dropTable("Clients");

    }


}
