import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/components/ui/Field/Field'

import { IReview, IReviewDto } from '@/interfaces/IReview.interface'

import { ReviewService } from '@/services/reviews.service'

import style from './Reviews.module.sass'
import { queryClient } from '../../../../pages/_app'

const ReviewForm: FC<{ movieId: number, reviews: IReview[]}> = ({
	movieId
}) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({ mode: 'onChange' })

	const { mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			async onSuccess() {
				reset()
				await queryClient.invalidateQueries(['get movies', movieId])
			}
		}
	)

	const onSubmit: SubmitHandler<IReviewDto> = async data => {
		await mutateAsync(data)
	}
	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={style.form__wrapper}>
				<Field
					{...register('description', { required: 'Description is required' })}
					placeholder="Add a new comment"
					error={errors.description}
				/>
				<button className={style.form__button}>Send</button>
			</div>
		</form>
	)
}

export default ReviewForm
