import styles from './index.module.sass'
import {useState} from "react";
import {useForm} from "react-hook-form";

const InputField = () => {
    const {register} = useForm()
    return (
        <div className={styles.input}>
            <input placeholder="name" {...register("firstName")} />
        </div>
    )
}

export default InputField