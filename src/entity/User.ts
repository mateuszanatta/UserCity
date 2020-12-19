import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { City } from './City';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column()
    name: string;
    @Column()
    sex: number;
    @Column()
    birthday: Date;
    @Column()
    age: number;

    @ManyToOne(() => City, client => client.client)
    @JoinColumn({name: 'city_id'})
    city: City;

}
