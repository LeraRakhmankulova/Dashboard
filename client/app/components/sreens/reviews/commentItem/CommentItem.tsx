import Image from 'next/image'
import { FC } from 'react'

import { IReview } from '@/interfaces/IReview.interface'

import style from './CommentItem.module.sass'

const CommentItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<div className={style.comment}>
			<div className={style.comment__author}>
				<Image
					src={review.user.avatarPath}
					alt={review.user.email}
					width={50}
					height={50}
				/>
				<div className={style.comment__author__info}>
					<h4>{review.user.email}</h4>
					<p>{review.user.name}</p>
				</div>
			</div>
			<article className={style.comment__description}>
				{review.description}
			</article>
		</div>
	)
}

export default CommentItem
