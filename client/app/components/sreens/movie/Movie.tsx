import {useQuery} from '@tanstack/react-query'
import Image from 'next/image'
import {useRouter} from 'next/router'

import Layout from '@/components/ui/Layout/Layout'

import {IMovie} from '@/interfaces/IMovie.interface'

import {MovieService} from '@/services/movie.service'

import ReviewForm from '../reviews/ReviewForm'
import Reviews from '../reviews/Reviews'

import style from './Movie.module.sass'
import movieMock from '../../../assets/images/mvMock.svg';
import mockCover from '../../../../public/card-img.png'

const Movie = () => {
    const movie = {
        movieId: 1,
        name: "Wonderful Woman",
        rating: 123,
        fees: 3456789,
        views: 456789,
        reviews: 454689
    }
    return (
        <Layout title={`${movie?.name}`}>
            <div className={style.movie}>
                <div className={style.movie__page}>
                    <h1>{movie?.name}</h1>
                    <div className={style.movie__info}>
                        <Image src={mockCover}/>
                        <div className={style.movie__block}>
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
                    <div className={style.movie__video}>
                        <Image src={movieMock}/>
                    </div>
                </div>
                {/*<Reviews*/}
                {/*    movieId={movieId}*/}
                {/*    reviews={movie?.reviews || []}*/}
                {/*/>*/}
            </div>
        </Layout>
    )
}

export default Movie
