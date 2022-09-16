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
					width={40}
					height={40}
				/>
				<div className={style.comment__author__name}>{review.user.name}</div>
				<div className={style.comment__author__mail}>{review.user.email}</div>
			</div>
			<article className={style.comment__description}>
				{review.description}
			</article>
		</div>
	)
}

export default CommentItem
