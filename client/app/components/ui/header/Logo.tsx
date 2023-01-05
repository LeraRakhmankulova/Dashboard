import Link from 'next/link'
import React, { FC } from 'react'

import styles from '../header/Header.module.sass'

const Logo: FC = () => {
	return (
		<Link href='/' >
			<a className={styles.logo} title="go to main">CINEMA DASHBOARD</a>
		</Link>
	)
}
export default Logo
