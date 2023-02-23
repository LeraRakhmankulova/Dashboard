import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MovieEntity} from "../../movie/entities/movie.entity";
import {UserEntity} from "../../user/entities/user.entity";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number

    // @ManyToOne(() => UserEntity, {nullable: true})
    // @JoinColumn({name: 'userId'})
    // user: UserEntity
    //
    // @ManyToOne(() => MovieEntity, {nullable: false})
    // @JoinColumn({name: 'movieId'})
    // movie: MovieEntity

    @Column({nullable: false})
    description: string

    @Column({default: 0})
    views: number

    @CreateDateColumn()
    createdAt: Date
}
