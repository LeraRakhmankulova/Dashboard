import { FC } from 'react'

import { IComment, IReview } from '@/interfaces/IReview.interface'

import { useAuth } from '@/hooks/useAuth'

import ReviewForm from './ReviewForm'
import style from './Reviews.module.sass'
import CommentItem from './commentItem/CommentItem'

const Reviews: FC<IComment> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth()
	return (
		<div className={style.reviews}>
			<div>
				{user && <ReviewForm movieId={movieId} reviews={reviews} />}
				{isLoading ? (
					// <Loader count={5} />
					<div>loading here</div>
				) : reviews?.length ? (
					<div className={style.reviews__item}>
						{reviews.map(rev => (
							<CommentItem review={rev} key={rev.id} />
						))}
					</div>
				) : (
					<p>Comments not found!</p>
				)}
			</div>
		</div>
	)
}

export default Reviews
