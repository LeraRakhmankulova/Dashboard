import styles from './index.module.sass'
import TextField from "@/components/sreens/movie/InputField/TextField";
import Comment from "@/components/sreens/movie/Comment/Comment";

const Reviews = () => {
    return (
        <div className={styles.review}>
            <div className={styles.review__wrap}>
                <div className={styles.review__label}>
                    <label>222 рецензии</label>
                    <ul>
                        <li>Популярные</li>
                        <li>По порядку</li>
                    </ul>
                </div>
            </div>
            <div className={styles.review__content}>
                <TextField/>
                <div className={styles.review__comments}>
                  <Comment/>
                </div>
            </div>
        </div>
    )
}

export default Reviews