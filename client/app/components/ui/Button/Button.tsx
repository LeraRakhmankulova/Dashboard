import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/interfaces/IButton.interface'

import style from './index.module.sass'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(style.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
