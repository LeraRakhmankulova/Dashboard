import styles from './index.module.sass'

const InfoCard = () => {
    return (
        <div className={styles.info_card}>
            <h4>Today’s Revenue</h4>
            <h2>{15e5}</h2>
        </div>
    )
}

export default InfoCard