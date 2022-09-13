import { FC } from 'react'

import { IHome } from '@/interfaces/IHome.interface'

import Layout from '../../ui/Layout/Layout'
import MovieItem from '../../ui/MovieItem/MovieItem'

import style from './Home.module.sass'

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title="Cinema dashboard">
			<div className={style.home_page}>
				<div className={style.home_page__title}>
					<h1>Latest movies</h1>
				</div>
				<div className={style.home_page__catalog}>
					{newMovies.length ? (
						newMovies.map(movieItem => (
							<MovieItem movie={movieItem} key={movieItem.id} />
						))
					) : (
						<h3>Movies not found...</h3>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Home
