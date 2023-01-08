import styles from './index.module.sass'
import Layout from "@/ui/Layout/Layout";

const Profile = () => {
    return (
        <Layout title='Profile'>
            <div className={styles.profile}>
                <div className={styles.profile__wrap}>
                    <h1>Dashboard Overview</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Profile