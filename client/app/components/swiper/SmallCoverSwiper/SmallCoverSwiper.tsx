import {Swiper as SwiperLayout, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Autoplay} from "swiper";
import {FC, PropsWithChildren} from "react";
import styles from './index.module.sass'
import FullCoverMovie from "@/components/swiper/moviesCovers/FullCoverMovie";
import {filmsCardsMock, filmsMock} from "../../../mocks/filmsCover";
import CoverMovie from "@/components/swiper/moviesCovers/CoverMovie";
import {IReview} from "@/interfaces/IReview.interface";

const SmallCoverSwiper: FC<any> = () => {
    return (
        <div className={styles.main}>
            <SwiperLayout
                slidesPerView={6}
                spaceBetween={20}
                navigation
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                modules={[Navigation, Autoplay]}
            >
                {filmsCardsMock.map((el, idx) =>
                    <SwiperSlide>
                        <CoverMovie data={el} key={idx}/>
                    </SwiperSlide>)}
            </SwiperLayout>
        </div>
    )
}


export default SmallCoverSwiper