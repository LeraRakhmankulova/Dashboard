import styles from './index.module.sass'
import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";
import Image from "next/image";
import settings from '../../../../public/settings.svg';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const Header = () => {
    const data = useSelector((state: RootState) => state.user.data)
    return (
        <header className={styles.header}>

            <ul>
                <li>
                    {/*<h1>{data.email}</h1>*/}
                </li>
                <li>
                    <AuthForm/>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={settings} alt='settings'/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header