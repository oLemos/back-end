import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ length: 11 })
    cpf: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    photo: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
