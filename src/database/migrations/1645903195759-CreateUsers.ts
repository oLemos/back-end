import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1645903195759 implements MigrationInterface {
    // Up - Cria e reflete no banco de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "photo",
                        type: "varchar",
                    },
                ],
            })
        );
    }

    // Down - Ele reverte o que fizemos dentro do up
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
