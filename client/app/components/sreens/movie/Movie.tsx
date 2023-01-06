import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '@/components/ui/Layout/Layout'

import { IMovie } from '@/interfaces/IMovie.interface'

import { MovieService } from '@/services/movie.service'

import ReviewForm from '../reviews/ReviewForm'
import Reviews from '../reviews/Reviews'

import style from './Movie.module.sass'

const Movie = () => {
	const { query } = useRouter()
	const movieId = Number(query?.id)

	const {
		data: movie,
		isLoading
	} = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			select: ({ data }) => data
		}
	)
	return (
		<Layout title={`${movie?.name}`}>
			<div className={style.movie_page}>
				<div className={style.movie_page__poster}>
					<Image
						src={movie?.poster || ''}
						alt={movie?.name}
						width={290}
						height={415}
					/>
				</div>
				<div className={style.movie_page__info}>
					<h1>{movie?.name}</h1>
					<h3>{movie?.rating}</h3>
					<h2>About movie:</h2>
					<ul>
						<li>
							<span>Fees: </span>
							<span>$ {movie?.fees}</span>
						</li>
						<li>
							<span>Views: </span>
							<span>{movie?.views}</span>
						</li>
					</ul>
				</div>
			</div>
			<Reviews
				movieId={movieId}
				reviews={movie?.reviews || []}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default Movie
