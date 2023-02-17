import styles from './index.module.sass'

const InputField = () => {
    return (
        <div className={styles.input}>
            <textarea>Написать рецензию...</textarea>
        </div>
    )
}

export default InputField