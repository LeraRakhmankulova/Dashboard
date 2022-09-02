import { Variants } from 'framer-motion';

export const menuAnimation: Variants = {
    open: {
        opacity: 1,
        transition: { duration: 0.25 },
    },
    closed: {
        opacity: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.13
        },
    },

}