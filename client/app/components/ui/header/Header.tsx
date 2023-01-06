import styles from './index.module.sass'
import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";
import Image from "next/image";
import settings from '../../../../public/settings.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <ul>
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