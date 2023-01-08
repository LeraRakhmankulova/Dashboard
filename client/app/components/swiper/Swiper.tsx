import {Swiper as SwiperLayout, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, Autoplay} from "swiper";
import {FC} from "react";
import styles from './index.module.sass'
import Button from "@/ui/Button/Button";

interface ICoverProps {
    img: string,
    title: string,
    description: string
    genre?: string
}

const Swiper: FC<{ data: ICoverProps[] }> = ({data}) => {
    return (
        <div className={styles.main}>
            <SwiperLayout
                navigation
                speed={3000}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                modules={[Navigation, Autoplay]}
            >
                {data.map((el, idx) =>
                    <SwiperSlide key={idx}>
                        <div className={styles.main__wrap}>
                            <img src={el.img}/>
                        </div>
                        <div className={styles.main__film}>
                            <div className={styles.main__film__info}>
                                <aside>
                                    <div className={styles.main__film__genre}>{el.genre}</div>
                                    <h1>{el.title}</h1>
                                    <label>{el.description}</label>
                                    <Button>Watch</Button>
                                </aside>
                            </div>
                        </div>
                    </SwiperSlide>)}
            </SwiperLayout>
        </div>
    )
}

export default Swiper