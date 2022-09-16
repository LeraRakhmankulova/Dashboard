import React, { FC } from 'react'
import AuthForm from '../Layout/auth/AuthForm'
import styles from './Header.module.sass'
import Logo from './Logo'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<AuthForm/>
		</header>
	)
}
export default Header
