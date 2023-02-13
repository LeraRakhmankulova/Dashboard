import styles from './index.module.sass'
import Button from "@/ui/Button/Button";
import {FC} from "react";
import {ICoverProps} from "@/interfaces/IMovieCover";

const FullCoverMovie: FC<{ data: ICoverProps }> = ({data}) => {
    return (
        <div>
            <div className={styles.main__wrap}>
                <img src={data.img}/>
            </div>
            <div className={styles.main__film}>
                <div className={styles.main__film__info}>
                    <aside>
                        <div className={styles.main__film__genre}>{data.genre}</div>
                        <h1>{data.title}</h1>
                        <label>{data.description}</label>
                        <Button>Watch</Button>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default FullCoverMovie