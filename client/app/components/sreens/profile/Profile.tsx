import styles from './index.module.sass'
import Layout from "@/ui/Layout/Layout";
import InfoCard from "@/components/cards/InfoCard/InfoCard";

const Profile = () => {
    return (
        <Layout title='Profile'>
            <div className={styles.profile}>
                <div className={styles.profile__wrap}>
                    <h1>Dashboard Overview</h1>
                    <div className={styles.profile__cards}>
                        <InfoCard/>
                        <InfoCard/>
                        <InfoCard/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile