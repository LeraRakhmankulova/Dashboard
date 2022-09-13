import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/interfaces/IMovie.interface'

import style from './MovieItem.module.sass'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<a title={movie.name}>
				<div className={style.movie}>
					{movie.rating && <div className={style.rating}> {movie.rating}</div>}
					<div className={style.movie__poster}>
						<Image
							src={movie.poster}
							alt={movie.name}
							width={220}
							height={330}
						/>
					</div>
                    <div className={style.movie__heading}>
                        <h2>{movie.name}</h2>
                    </div>
				</div>
			</a>
		</Link>
	)
}

export default MovieItem
