import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class MovieEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: true})
    genre: string

    @Column()
    rating: number | null

    @Column()
    poster: string

    @Column()
    views: number

    @Column({nullable: true})
    description?: string

    @Column()
    fees: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
