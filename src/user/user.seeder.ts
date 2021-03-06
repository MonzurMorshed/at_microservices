import {NestFactory} from "@nestjs/core";
import faker from "faker";
import { createConnection } from "typeorm";
import {AppModule} from "../app.module";
import { User } from "./user";
import {UserService} from "./user.service";

(async () => {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService = app.get(UserService);

    const connection = await createConnection({
        name: 'old',
        type: 'mysql',
        host: 'host.docker.internal',
        username: 'root',
        password: 'root',
        database: 'ambassador',
        entities: [User],
        synchronize: false,
    });

    const users = await connection.manager.find(User);

    for (let i = 0; i < users.length; i++) {
        await userService.save(users[i]);
    }

    process.exit();
})();
