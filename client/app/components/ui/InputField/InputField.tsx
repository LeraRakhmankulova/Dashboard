import styles from './index.module.sass'
import {FC, memo} from "react";

interface InputProps{
    placeholder: string,
    name: string
    error: any,
    register: any
}

const InputField:FC<InputProps> = ({placeholder, name, error, register}) => {
    return (
        <div className={styles.input}>
            <input placeholder={placeholder} {...register(name)}/>
            <p>{error}</p>
        </div>
    )
}

export default memo(InputField)