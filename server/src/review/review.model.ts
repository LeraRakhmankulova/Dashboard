import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { MovieModel } from "src/movie/movie.model";
import { UserModel } from "src/user/user.model";

@Table({ tableName: 'Review', deletedAt: false, version: false })
export class ReviewModel extends Model<ReviewModel>{
    @Column({defaultValue: ''})
    description: string

    @ForeignKey(() => UserModel)
    @Column
    userId: number

    @BelongsTo(() => UserModel)
    user: UserModel

    @ForeignKey(() => MovieModel)
    @Column
    movieId: number

    @BelongsTo(() => MovieModel)
    movie: MovieModel
}