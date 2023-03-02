export type LoginFormType = {
    email: string
    password: string
}

export type RegisterFormType = {
    fullname: string
} & LoginFormType

