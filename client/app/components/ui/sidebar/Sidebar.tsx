import React, {FC} from 'react'
import AuthForm from '../../auth/AuthForm'
import styles from './Sidebar.module.sass'
import Image from "next/image";
import logo from '../../../../public/logo.svg'
import home from '../../../../public/home.svg'
import settings from '../../../../public/settings.svg'
import profile from '../../../../public/profile.svg'
import popular from '../../../../public/popular.svg'
import Link from "next/link";

const Sidebar: FC = () => {
    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <Image src={logo} alt='logo' width={50}/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={home} alt='logo' width={50}/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={popular} alt='logo' width={50}/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={settings} alt='logo' width={50}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Sidebar
