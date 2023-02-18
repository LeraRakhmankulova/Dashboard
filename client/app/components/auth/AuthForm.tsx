import {motion} from 'framer-motion'
import Image from 'next/image'
import React, {FC, useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {IAuthFields} from '@/interfaces/IAuthFields.interface'
import {useAuth} from '@/hooks/useAuth'
import {useOutside} from '@/hooks/useOutside'
import {AuthService} from '@/services/auth/auth.service'
import {menuAnimation} from '@/utils/animation/fade'
import userIcon from '../../../public/profile.svg'
import UserAvatar from '../ui/UserAvatar/UserAvatar'
import style from './Auth.module.sass'
import Button from '../ui/Button/Button'
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema, PasswordSchema} from "@/utils/schemas/validationSchema";
import LoginForm from "@/components/auth/Forms/LoginForm";
import RegForm from "@/components/auth/Forms/RegForm";

const AuthForm: FC = () => {
    const {ref, setIsShow, isShow} = useOutside(false)

    const [type, setType] = useState<'login' | 'register'>('login')

    const { register, handleSubmit, watch, formState: { errors }} = useForm({
		resolver: yupResolver(LoginSchema),
        mode: 'onChange'
    })

    return (
        <div className={style.wrapper} ref={ref}>
            {/*<UserAvatar*/}
            {/*	title="Перейти на доску"*/}
            {/*	link="/dashboard"*/}
            {/*	// avatarPath={user.avatarPath}*/}
            {/*	avatarPath='/avatar.jpg'*/}
            {/*/>*/}

            <button className={style.button} onClick={() => setIsShow(!isShow)}>
                <Image src={userIcon} width={25} height={25}/>
            </button>

            <motion.div
                transition={{duration: 1}}
                animate={isShow ? 'open' : 'closed'}
                variants={menuAnimation}>
                <div className={style.form}>
                    {type === 'login' ? <LoginForm setType={() => setType('login')}/>
                        : <RegForm setType={() => setType('register')}/>}
                </div>
            </motion.div>
        </div>
    )
}
export default AuthForm
