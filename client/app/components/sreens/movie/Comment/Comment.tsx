import styles from './index.module.sass'
import {IReview} from "@/interfaces/IReview.interface";
import {FC} from "react";
import avatar from '../../../../../public/avatar.jpg'
import Image from "next/image";

const Comment: FC<any> = () => {
    return (
        <div className={styles.comment}>
            <div className={styles.comment__wrap}>
                <div className={styles.comment__user}>
                    <Image src={avatar} width={30} height={30}/>
                    <label>Вася Пукин</label>
                    <span>12.12.2002</span>
                </div>
                <div className={styles.comment__description}>
                    Какой-то вот тут текст
                </div>
            </div>
        </div>
    )
}

export default Comment