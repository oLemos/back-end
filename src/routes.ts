import { Router } from "express";

const router = Router();

import { UsersController } from "./controllers/UsersController";

const usersControler = new UsersController();

router.post("/users", usersControler.create);

export { router };
