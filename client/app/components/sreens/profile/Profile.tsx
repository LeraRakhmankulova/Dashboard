import styles from './index.module.sass'
import Layout from "@/ui/Layout/Layout";
import InfoCard from "@/components/sreens/profile/cards/InfoCard/InfoCard";
import MovieList from "@/components/sreens/profile/MovieList/MovieList";

const Profile = () => {
    return (
        <Layout title='Profile'>
            <div className={styles.profile}>
                <div className={styles.profile__top}>
                    <div className={styles.profile__top__wrap}>
                        <h1>Dashboard Overview</h1>
                        <div className={styles.profile__top__cards}>
                            <InfoCard/>
                            <InfoCard/>
                            <InfoCard/>
                        </div>
                        <div className={styles.profile__graph}>
                            <MovieList/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile