import { FC, PropsWithChildren, createContext, useState } from 'react'

import { IContext, TypeUserState } from '../../interfaces/IContext.interface'

export const AuthContext = createContext({} as IContext)

// type TypeUserState = IUser | null

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
