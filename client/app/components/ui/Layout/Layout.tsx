import React, {FC, PropsWithChildren} from 'react'
import Meta from '@/utils/Meta'
import {IMeta} from '@/interfaces/IMeta.interface'
import Header from '../header/Header'

const Layout: FC<PropsWithChildren<IMeta>> = ({children, ...meta}) => {
    return (
        <>
            <Meta {...meta}/>
            <div>
                <Header/>
                <main className='p-4'>
                    {children}
                </main>
            </div>
        </>
    )
}
export default Layout
