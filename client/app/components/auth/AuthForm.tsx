import {motion} from 'framer-motion'
import Image from 'next/image'
import React, {FC, useState} from 'react'
import {useOutside} from '@/hooks/useOutside'
import {menuAnimation} from '@/utils/animation/fade'
import userIcon from '../../../public/profile.svg'
import style from './Auth.module.sass'
import Button from '../ui/Button/Button'
import LoginForm from "@/components/auth/Forms/LoginForm";
import RegForm from "@/components/auth/Forms/RegForm";
import ErrorAlert from "@/components/auth/Alert/ErrorAlert";
import UserAvatar from "@/ui/UserAvatar/UserAvatar";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const AuthForm: FC = () => {
    const {ref, setIsShow, isShow} = useOutside(false)
    const [type, setType] = useState<'login' | 'register'>('login')
    const userInfo = useSelector((state: RootState) => state.user.data)
    return (
        <div className={style.wrapper} ref={ref}>

            {userInfo ?
                <UserAvatar
                    title="Перейти на доску"
                    link="/profile"
                    avatarPath='/avatar.jpg'
                /> :
                <>
                    <button className={style.button} onClick={() => setIsShow(!isShow)}>
                        <Image src={userIcon} width={25} height={25} alt='icon'/>
                    </button>
                    <motion.div
                        transition={{duration: 1}}
                        animate={isShow ? 'open' : 'closed'}
                        variants={menuAnimation}>
                        <div className={style.form}>


                            {type === 'login' ? <LoginForm/> : <RegForm/>}
                            <div className="mt-1 text-center">
                                <Button className={style.button__auth}
                                        onClick={() => setType(type === 'login' ? 'register' : 'login')}>
                                    {type === 'login' ? 'Register' : 'Login'}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>}
        </div>
    )
}
export default AuthForm
