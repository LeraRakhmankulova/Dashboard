import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: true})
    genre: string

    @Column({default: 0})
    rating: number

    @Column()
    poster: string

    @Column({default: 0})
    views: number

    @Column({nullable: true})
    description?: string

    @Column({default: 0})
    fees: number

    @Column({default: 0})
    year: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
