import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import { User }  from './User'

@Entity('city')
export class City{
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column()
    name: string;
    @Column()
    state: string;

    @OneToMany(() => User, user => user.city)
    @JoinColumn({name: 'city_id'})
    client: User[];
}