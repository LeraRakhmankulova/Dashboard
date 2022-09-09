import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { ReviewModel } from "src/review/review.model";

@Table({ tableName: 'User', deletedAt: false, version: false,
defaultScope:{
    attributes:{
        exclude: ['password']
    }
} })
export class UserModel extends Model<UserModel> {
    @Column
    name: string

    @Column({ unique: true })
    email: string

    @Column
    password: string

    @Column
    avatarPath: string

    @HasMany(() => ReviewModel)
    reviews: ReviewModel[]
}