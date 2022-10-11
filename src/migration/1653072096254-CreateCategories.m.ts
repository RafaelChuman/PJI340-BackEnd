import { MigrationInterface, QueryRunner, Table, TableIndex, TableOptions } from "typeorm"

export class CreateCategories1653072096254 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const newCategoriesTableOptions:TableOptions = {
            name:"Categories",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name:"name",
                    type:"varchar",
                    isNullable: false,
                    isUnique: true,
                    length:"20",
                },
                {
                    name:"createdAt",
                    type:"timestamp",
                    isNullable: false,
                    default:"now()",
                },
            ]
        };


        await queryRunner.createTable(new Table(newCategoriesTableOptions));

        await queryRunner.createIndex(
            "Categories",
            new TableIndex({
                name: "IDX_CATEGORIES_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropIndex("Categories", "IDX_CATEGORIES_NAME");

        await queryRunner.dropTable("Categories");
    }

}
