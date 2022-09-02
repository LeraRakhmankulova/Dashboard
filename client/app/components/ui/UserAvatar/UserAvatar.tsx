import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import style from './UserAvatar.module.sass'

const UserAvatar: FC<{ avatarPath: string, link: string, title?: string }> = ({ avatarPath, link, title }) => {
	return (
		<Link href={link}>
			<a title={title}>
				<Image className={style.avatar} src={avatarPath} width={30} height={30}/>
			</a>
		</Link>
	)
}

export default UserAvatar
