import { FC } from 'react'

import { IHome } from '@/interfaces/IHome.interface'
import { IMovie } from '@/interfaces/IMovie.interface'

import Layout from '../ui/Layout/Layout'
import MovieItem from '../ui/MovieItem/MovieItem'

import style from './Home.module.sass'

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title="Cinema dashboard">
			<h1>Latest movies</h1>
			{newMovies.length ? (
				newMovies.map((movieItem) => <MovieItem movie={movieItem} />)
			) : (
				<h3>Movies not found...</h3>
			)}
		</Layout>
	)
}

export default Home
