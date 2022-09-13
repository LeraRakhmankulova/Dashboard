import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Home from '@/components/sreens/Home'

import { IHome } from '@/interfaces/IHome.interface'

import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/interfaces/IMovie.interface'

const HomePage: NextPage<IHome> = (props) => {
	const moviesMock: IMovie[] = [
		{
		  id: 1,
		  name: 'Леди берд',
		  rating: '10',
		  poster: '/poster1.jpg',
		  views: 392746634,
		  fees: 1090240
		},
		{
		  id: 2,
		  name: 'Супермены',
		  rating: '7.3',
		  poster: '/poster2.jpg',
		  views: 129048760,
		  fees: 898097
		}
	  ]
	return <Home newMovies={moviesMock} />
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
	try {
		const { data: newMovies } = await MovieService.getAll()
		return {
			props: {
				newMovies
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				newMovies: []
			}
		}
	}
}

export default HomePage
