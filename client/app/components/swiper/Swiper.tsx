import {Swiper as SwiperLayout, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Autoplay} from "swiper";
import {FC, PropsWithChildren} from "react";
import styles from './index.module.sass'
import Button from "@/ui/Button/Button";
import FullCoverMovie from "@/components/swiper/moviesCovers/FullCoverMovie";
import {children} from "dom7";

interface ICoverProps {
    img: string,
    title: string,
    description?: string
    genre?: string
}

const Swiper: FC<any> = ({children}) => {
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
                <SwiperSlide>
                    {children}
                </SwiperSlide>)
            </SwiperLayout>
        </div>
    )
}

export default Swiper