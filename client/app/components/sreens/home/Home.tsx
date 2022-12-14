import {FC} from 'react'
import {IHome} from '@/interfaces/IHome.interface'
import Layout from '../../ui/Layout/Layout'
import MovieItem from '../../ui/MovieItem/MovieItem'
import style from './Home.module.sass'
import Swiper from "@/components/swiper/Swiper";
import {filmsMock, filmsCardsMock} from "../../../mocks/filmsCover";
import FullCoverMovie from "@/components/swiper/moviesCovers/FullCoverMovie";

const Home: FC<IHome> = ({newMovies}) => {
    return (
        <Layout title="Cinema dashboard">
            <div className={style.home_page}>
                <Swiper>
                    {filmsMock.map((el, idx) =>
                    <FullCoverMovie data={el} key={idx}/>)}
                </Swiper>
                {/*<Swiper data={filmsCardsMock} slidersCount={4}/>*/}
                {/*<div className={style.home_page__wrap}>*/}
                {/*	{newMovies.length ? (*/}
                {/*		newMovies.map(movieItem => (*/}
                {/*			<MovieItem movie={movieItem} key={movieItem.id} />*/}
                {/*		))*/}
                {/*	) : (*/}
                {/*		<h3>Movies not found...</h3>*/}
                {/*	)}*/}
                {/*</div>*/}
            </div>
        </Layout>
    )
}

export default Home
