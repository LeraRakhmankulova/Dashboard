import {FC} from 'react'
import {IHome} from '@/interfaces/IHome.interface'
import Layout from '../../ui/Layout/Layout'
import style from './Home.module.sass'
import FullSwiper from "@/components/swiper/FullSwiper/FullSwiper";
import SmallCoverSwiper from "@/components/swiper/SmallCoverSwiper/SmallCoverSwiper";

const Home: FC<IHome> = ({newMovies}) => {
    return (
        <Layout title="Cinema dashboard">
            <div className={style.home_page}>
                <FullSwiper/>
                <div className={style.home_page__sev}>
                    <SmallCoverSwiper/>
                </div>
            </div>
        </Layout>
    )
}

export default Home
