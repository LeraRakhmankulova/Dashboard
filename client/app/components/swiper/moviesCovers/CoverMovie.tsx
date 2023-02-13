import cover from '../../../../public/card-img.png'
import {FC} from "react";
import {ICoverProps} from "@/interfaces/IMovieCover";
import styles from "@/components/swiper/moviesCovers/index.module.sass";
import Button from "@/ui/Button/Button";

const CoverMovie: FC<{ data: ICoverProps }> = ({data}) => {
    return (
        <div>
            <div className={styles.main__wrp}>
                <img src={data.img}/>
            </div>
            <div className={styles.main}>
                <div className={styles.main__sm}>
                    <aside>
                        <h1>{data.title}</h1>
                        <div className={styles.main__film__genre}>{data.genre}</div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default CoverMovie