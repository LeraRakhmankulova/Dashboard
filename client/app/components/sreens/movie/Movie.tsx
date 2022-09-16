import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from '@/components/ui/Layout/Layout'

import { IMovie } from '@/interfaces/IMovie.interface'

import { MovieService } from '@/services/movie.service'

import Reviews from '../reviews/Reviews'

import style from './Movie.module.sass'

const Movie = () => {
	const { query } = useRouter()
	const movieMock: IMovie = {
		id: 1,
		name: 'Little princes',
		rating: 2.7,
		poster: '/poster2.jpg',
		views: 400,
		fees: 457568,
		reviews: [
			{
				id: 1,
				user: {
					id: 1,
					name: 'Anatoly',
					email: 'anatoly.ru',
					avatarPath: '/avatar.jpg'
				},
				movie: {
					id: 1,
					name: '',
					rating: 344,
					poster: 'slslsls',
					views: 3039393,
					fees: 87987987
				},
				description: 'Скажу честно, я&nbsp;абсолютно не&nbsp;знаток оригинальной игры Dungeons &amp;&nbsp;Dragons, зато люблю фильмы про драконов. Особенно фильмы категории Б&nbsp;&mdash; именно&nbsp;те, которые в&nbsp;золотые времена крутили по&nbsp;каналу ТВ-3. Долго я&nbsp;обходил стороной этот фильм, так как немного не&nbsp;мой профиль&nbsp;&mdash; солидный бюджет и&nbsp;не&nbsp;последние актеры в&nbsp;главных ролях, но&nbsp;наличие видеосиквелов, которые как раз должны подходить под рамки низкобюджетных фэнтези сделали свое дело, и&nbsp;я&nbsp;решился ознакомиться с&nbsp;оригиналом.'
			},
			{
				id: 2,
				user: {
					id: 38,
					name: 'Anatoly',
					email: 'thisemailisverylong@mail.ru',
					avatarPath: '/avatar.jpg'
				},
				movie: {
					id: 2,
					name: '',
					rating: 344,
					poster: 'slslsls',
					views: 3039393,
					fees: 87987987
				},
				description: 'Итак, перед нами фэнтези Кортни Соломона &laquo;Подземелье драконов&raquo;. Поговаривают, режиссер приобрел права на&nbsp;экранизацию аж&nbsp;в&nbsp;1991&nbsp;году, таким он&nbsp;был фанатом оригинальной игры. Так если за&nbsp;дело взялся настоящий знаток, почему рейтинг IMDb 3,6, почему разгромные отзывы не&nbsp;только критиков, но&nbsp;и&nbsp;рядовых зрителей? Попробуем разобраться.Сюжет рассказывает нам об&nbsp;империи Измир, в&nbsp;котором проживают как маги, так и&nbsp;простые работяги, к&nbsp;которым также относят гномов и&nbsp;эльфов. Императрица Савина хочет убрать всю эту классовую рознь, однако ей&nbsp;противостоит главный маг Профион. Для осуществления своего грозного плана ему нужно заполучить золотой жезл молодой правительницы, который позволяет управлять золотыми драконами. Однако, он&nbsp;не&nbsp;знает, что существует еще один жезл&nbsp;&mdash; красный&nbsp;&mdash; который позволяет управлять (внезапно!) красными драконами, ну&nbsp;то&nbsp;есть злыми. Тем временем нас знакомят с&nbsp;главными персонажами фильма&nbsp;&mdash; двумя ворами, которые решили ограбить школу магии и&nbsp;попросту оказались не&nbsp;в&nbsp;том месте не&nbsp;в&nbsp;то&nbsp;время. Приключение начинается...'
			}
		]
	}

	const movieId = Number(query?.id)

	const {
		refetch,
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
		<Layout title={`${movieMock?.name}`}>
			<div className={style.movie_page}>
				<div className={style.movie_page__poster}>
					<Image
						src={movieMock.poster}
						alt={movieMock.name}
						width={280}
						height={405}
					/>
				</div>
				<div className={style.movie_page__info}>
					<h1>{movieMock.name}</h1>
					<h3>{movieMock?.rating}</h3>
					<h2>About movie:</h2>
					<ul>
						<li>
							<span>Fees: </span>
							<span>$ {movieMock?.fees}</span>
						</li>
						<li>
							<span>Views: </span>
							<span>{movieMock?.views}</span>
						</li>
					</ul>
				</div>
			</div>
			<Reviews
				movieId={movieMock.id}
				reviews={movieMock?.reviews || []}
				isLoading={isLoading}
			/>
		</Layout>
	)
}

export default Movie
