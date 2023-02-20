import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @Column()
    rating: number | null

    @Column()
    poster: string

    @Column()
    views: number

    // @Column()
    // reviews?: IReview[]

    @Column()
    fees: number
}
