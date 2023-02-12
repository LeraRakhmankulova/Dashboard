import styles from './index.module.sass'

const InfoCard = () => {
    return (
        <div className={styles.info_card}>
            <h4>Today’s Revenue</h4>
            <label>{15e6}</label>
            <div className={styles.info_card__extra}>
                <div className={styles.info_card__num}>5768</div>
                <span>from yesterday</span>
            </div>
        </div>
    )
}

export default InfoCard