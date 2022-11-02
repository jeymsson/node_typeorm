import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1667419427350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'livros',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'name',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'categorias_id',
						type: 'uuid'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
				],
				"foreignKeys": [
					{name: "FK_livrocategoria", columnNames: ["categorias_id"], referencedColumnNames: ["id"], referencedTableName: "categorias"}
				]
			})
		);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('livros');
    }

}
