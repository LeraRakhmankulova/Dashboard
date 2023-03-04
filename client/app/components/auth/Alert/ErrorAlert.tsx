import styles from './index.module.sass'
import {FC} from "react";

const ErrorAlert: FC<{ errorText: string }> = ({errorText}) => {
    return (
        <div>
            <div className={styles.error}>
                <span>{errorText}</span>
            </div>
        </div>
    )
}

export default ErrorAlert