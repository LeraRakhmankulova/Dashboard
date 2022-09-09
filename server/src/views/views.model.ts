import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { MovieModel } from "src/movie/movie.model";

@Table({ tableName: 'Views', deletedAt: false, version: false })
export class ViewsModel extends Model<ViewsModel> {
    @ForeignKey(() => MovieModel)
    @Column({field: 'movie_id'})
    movieId: number

    @Column({defaultValue: 0})
    views: number
}