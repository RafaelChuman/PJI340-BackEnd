import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from "typeorm"

export class CreateProducts1653072096255 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const newProductTableOptions = {
            name:"Products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "categoriesId",
                    type: "uuid",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "numberStocke",
                    type: "integer",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "quantityValue",
                    type: "integer",
                },

                {
                    name: "quantityUnit",
                    type: "varchar",
                },

                {
                    name: "value",
                    type: "integer",
                }
            ],
        }

        const newProductTable = new Table(newProductTableOptions);

        await queryRunner.createTable(newProductTable);


        await queryRunner.createIndex(
            "Products",
            new TableIndex({
                name: "IDX_PRODUCTS_NAME",
                columnNames: ["name"],
            })
        );

        await queryRunner.createForeignKey(
            "Products",
            new TableForeignKey({
                name:"FK_PRODUCTS_CATEGORIESID",
                columnNames: ["categoriesId"],
                referencedColumnNames: ["id"],
                referencedTableName: "Categories",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey("Products", "FK_PRODUCTS_CATEGORIESID");

        await queryRunner.dropIndex("Products", "IDX_PRODUCTS_NAME");

        await queryRunner.dropTable("Products");
    }

}
