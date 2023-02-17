import styles from './index.module.sass'
import InputField from "@/components/sreens/movie/InputField/InputField";

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
                <InputField/>
                <div className={styles.review__comments}>
                    <div>sddww</div>
                </div>
            </div>
        </div>
    )
}

export default Reviews