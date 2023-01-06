import React, {FC, PropsWithChildren} from 'react'
import Meta from '@/utils/Meta'
import {IMeta} from '@/interfaces/IMeta.interface'
import styles from './index.module.sass'
import Sidebar from "@/ui/sidebar/Sidebar";
import Header from "@/ui/header/Header";

const Layout: FC<PropsWithChildren<IMeta>> = ({children, ...meta}) => {
    return (
        <>
            <Meta {...meta}/>
            <div className={styles.main}>
                <Sidebar/>
                <main className='p-4' style={{background: 'black'}}>
                    <Header/>
                    {children}
                </main>
            </div>
        </>
    )
}
export default Layout
