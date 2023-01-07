import styles from './index.module.sass'
import main from '../../../public/main-pict.png'
import Image from "next/image";
import Button from "@/ui/Button/Button";

const MainCover = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__wrap}>
                <Image src={main}/>
            </div>
            <div className={styles.main__film}>
                <div className={styles.main__film__info}>
                    <aside>
                        <h1>Godzilla vs. Kong</h1>
                        <label>In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and
                            Kong
                            on a collision course that will see the two most powerful forces of nature on the planet
                            collide
                            in a spectacular battle for the ages.</label>
                        <Button>Watch</Button>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default MainCover