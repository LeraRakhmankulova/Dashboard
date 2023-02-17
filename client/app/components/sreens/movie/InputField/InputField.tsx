import styles from './index.module.sass'
import {useState} from "react";

const InputField = () => {
    const [active, setActive] = useState(false)
    return (
        <div className={styles.input}>
            <textarea
                placeholder="Написать рецензию..."
                style={!active ? {height: '45px'} : {height: '100px', boxShadow: '0 0 30px rgb(0, 0, 0)'}}
                onClick={() => setActive(true)}/>
        </div>
    )
}

export default InputField