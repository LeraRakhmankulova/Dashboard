import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Почты не существует').required('Почта обязательна'),
    password: yup.string().min(6, 'Введите больше 6 символов').required('Пароль обязателен'),
})

export const PasswordSchema = yup.object().shape({
    name: yup.string().required('Имя обязательно')
}).concat(LoginSchema)

