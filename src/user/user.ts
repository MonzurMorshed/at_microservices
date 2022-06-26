import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Exclude } from "@nestjs/class-transformer";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({default: true})
    is_ambassador: boolean;

}
