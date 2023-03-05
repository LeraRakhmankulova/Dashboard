import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import style from './UserAvatar.module.sass'

const UserAvatar: FC<{ avatarPath: string, link: string }> = ({avatarPath, link}) => {
    return (
        <Link href={link}>
            <Image className={style.avatar} src={avatarPath} width={30} height={30} alt="avatar"/>
        </Link>
    )
}

export default UserAvatar
