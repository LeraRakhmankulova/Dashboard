import Image from 'next/image'
import Layout from '@/components/ui/Layout/Layout'
import style from './Movie.module.sass'
import mockCover from '../../../../public/card-img.png'
import Reviews from "@/components/sreens/movie/Reviews/Reviews";

const Movie = () => {
    const movie = {
        movieId: 1,
        name: "Wonderful Woman",
        rating: 123,
        fees: 3456789,
        views: 456789,
        reviews: []
    }
    return (
        <Layout title={`${movie?.name}`}>
            <div className={style.movie}>
                <div className={style.movie__page} style={{
                    backgroundImage: `url(${(mockCover.src)})`,
                    backgroundSize: 'cover'
                }}>
                    <div className={style.movie__info}>
                        <div className={style.movie__full}>
                            <Image src={mockCover} alt={movie.name}/>
                            <div className={style.movie__block}>
                                <h1>{movie?.name}</h1>
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
                        <div className={style.movie__review}>
                            <Reviews/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Movie
