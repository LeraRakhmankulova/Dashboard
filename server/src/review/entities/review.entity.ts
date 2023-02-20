import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MovieEntity} from "../../movie/entities/movie.entity";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number

    // @OneToMany(()=> MovieEntity)
    // movie: MovieEntity

    @Column({nullable: false})
    description: string

    @Column()
    createdAt: string
}
