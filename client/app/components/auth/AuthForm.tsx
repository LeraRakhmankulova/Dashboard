import { useMutation } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFields } from '@/interfaces/IAuthFields.interface'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import { AuthService } from '@/services/auth/auth.service'

import { menuAnimation } from '@/utils/animation/fade'

import userIcon from '../../../public/profile.svg'
import UserAvatar from '../ui/UserAvatar/UserAvatar'

import { validEmail } from './Auth.constants'
import style from './Auth.module.sass'
import Button from '../ui/Button/Button'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const { user, setUser } = useAuth()

	const { mutate: loginSync } = useMutation(
		['login'],
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
				reset()
				setIsShow(false)
			}
		}
	)

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user)
				reset()
				setIsShow(false)
			}
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') loginSync(data)
		else if (type === 'register') registerSync(data)
	}

	return (
		<div className={style.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					title="Перейти на доску"
					link="/dashboard"
					// avatarPath={user.avatarPath}
					avatarPath='/avatar.jpg'
				/>
			) : (
				<button className={style.button} onClick={() => setIsShow(!isShow)}>
					<Image src={userIcon} width={25} height={25} />
				</button>
			)}

			<motion.div
				transition={{ duration: 1 }}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
			>
				<form className={style.form} onSubmit={handleSubmit(onSubmit)}>

					<div className="mt-5 mb-1 text-center">
						<Button onClick={() => setType('login')}> Login </Button>
					</div>
					<button
						className={style.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
		</div>
	)
}
export default AuthForm
