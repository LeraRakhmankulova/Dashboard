import styles from './index.module.sass'
import {FC} from "react";

const NextArr: FC<{ title: string }> = ({title}) => {
    return (
        <div className={styles.arr}>
            {/*{title}*/}
        </div>
    )
}

export default NextArr