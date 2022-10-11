import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex, TableOptions } from "typeorm"

export class CreateTreatments1653322321419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const newTreatmentsTableOptions: TableOptions = {
            name: "Treatments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "treatmentsId",
                    type: "uuid",
                },
                {
                    name: "usersId",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "productsId",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "quantityOfProduct",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "quantityOfProductPerDay",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()",
                },
                {
                    name: "isValid",
                    type: "boolean",
                    isNullable: false,
                },
            ]
        }

        await queryRunner.createTable(new Table(newTreatmentsTableOptions));

        await queryRunner.createIndex(
            "Treatments",
            new TableIndex({
                name:"IDX_TREATMENTS_ID",
                columnNames:["treatmentsId"]
            })
        );

        await queryRunner.createForeignKey(
            "Treatments",
            new TableForeignKey({
                name:"FK_TREATMENTS_USERSID",
                columnNames: ["usersId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Users",
                onDelete: "CASCADE",
            }),
        );

        await queryRunner.createForeignKey(
            "Treatments",
            new TableForeignKey({
                name:"FK_TREATMENTS_PRODUCTSID",
                columnNames: ["productsId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Products",
                onDelete: "CASCADE",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropForeignKey("Treatments", "FK_TREATMENTS_USERSID");

        await queryRunner.dropForeignKey("Treatments", "FK_TREATMENTS_PRODUCTSID");

        await queryRunner.dropIndex("Treatments", "IDX_TREATMENTS_ID");

        await queryRunner.dropTable("Treatments");
    }

}
