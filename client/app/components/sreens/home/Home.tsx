import {FC} from 'react'

import {IHome} from '@/interfaces/IHome.interface'

import Layout from '../../ui/Layout/Layout'
import MovieItem from '../../ui/MovieItem/MovieItem'

import style from './Home.module.sass'
import Image from "next/image";
import main from '../../../../public/main-pict.png'
import MainCover from "@/components/mainCover/MainCover";

const Home: FC<IHome> = ({newMovies}) => {
    return (
        <Layout title="Cinema dashboard">
            <div className={style.home_page}>
                <MainCover/>
                {/*<div className={style.home_page__catalog}>*/}
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
