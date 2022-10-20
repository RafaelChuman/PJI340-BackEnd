import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
  TableOptions,
} from "typeorm";

export class CreateERs1653322321419 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const newERsTableOptions: TableOptions = {
      name: "ERs",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "number",
          type: "integer",
        },
        {
          name: "createdAt",
          type: "timestamp",
          isNullable: false,
          default: "now()",
        },
        {
          name: "zone",
          type: "uuid",
          isNullable: false,
        },
      ],
    };

    await queryRunner.createTable(new Table(newERsTableOptions));

    await queryRunner.createIndex(
      "ERs",
      new TableIndex({
        name: "IDX_ER_ID",
        columnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "ERs",
      new TableForeignKey({
        name: "FK_ER_ZONES",
        columnNames: ["zones"],
        referencedColumnNames: ["id"],
        referencedTableName: "Zones",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("ERs", "FK_ER_ZONES");

    await queryRunner.dropIndex("ERs", "IDX_ER_ID");

    await queryRunner.dropTable("ERs");
  }
}
