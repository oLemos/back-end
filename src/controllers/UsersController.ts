import { Request, Response } from "express";
import { UsersServices } from "../services/UsersServices";

class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf, phone, password, photo } = request.body;

        const usersService = new UsersServices();

        try {
            const data = { name, email, cpf, phone, password, photo };

            const user = await usersService.create(data);

            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({
                error: "Error on create user!",
            });
        }
    }
}

export { UsersController };
