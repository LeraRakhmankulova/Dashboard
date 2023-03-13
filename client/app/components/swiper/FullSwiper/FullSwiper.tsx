import {Swiper as SwiperLayout, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Autoplay} from "swiper";
import {FC} from "react";
import styles from './index.module.sass'
import FullCoverMovie from "@/components/swiper/moviesCovers/FullCoverMovie";
import {filmsMock} from "../../../mocks/filmsCover";

const FullSwiper: FC<any> = () => {
    return (
        <div className={styles.main}>
            <SwiperLayout
                slidesPerView={1}
                navigation
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                modules={[Navigation, Autoplay]}
            >
                {filmsMock.map((el, idx) =>
                    <SwiperSlide key={idx}>
                        <FullCoverMovie data={el}/>
                    </SwiperSlide>)}
            </SwiperLayout>
        </div>
    )
}

export default FullSwiper