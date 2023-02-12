import styles from './index.module.sass'

const MovieCard = () => {
    return (
        <div className={styles.movie}>
            <ul>
                <li>#10909</li>
                <li>Poster:</li>
                <li>Wonder Woman 1984</li>
                <li>Fantasy</li>
                <li>5</li>
                <li>4780</li>
            </ul>
        </div>
    )
}

export default MovieCard