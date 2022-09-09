import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { ReviewModel } from "src/review/review.model";

@Table({ tableName: 'Movie', deletedAt: false, version: false })
export class MovieModel extends Model<MovieModel>{
    @Column({unique: true})
    name: string

    @Column({allowNull: true})
    rating: number

    @Column({defaultValue: ''})
    poster: string

    @HasMany(() => ReviewModel)
    reviews: ReviewModel[]

    @Column({defaultValue: 0})
    fees: number
}