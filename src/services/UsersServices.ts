import { getCustomRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersServices {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(data: ICreateUserDTO) {
        const user = this.usersRepository.create(data);

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersServices };
