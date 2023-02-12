import styles from './index.module.sass'
import MovieCard from "@/components/sreens/profile/cards/MovieCard/MovieCard";

const MovieList = () => {
    return (
        <div className={styles.list}>
            <h2>Movie viewing history</h2>
            <ul>
                <li>Id</li>
                <li>Poster:</li>
                <li>Name:</li>
                <li>Genre:</li>
                <li>Rating:</li>
                <li>Views:</li>
            </ul>
            <div className={styles.list__films}>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    )
}

export default MovieList