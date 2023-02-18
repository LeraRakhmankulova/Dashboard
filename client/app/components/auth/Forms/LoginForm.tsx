import {useForm} from "react-hook-form";
import {LoginSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import React, {memo} from "react";
import Button from "@/ui/Button/Button";
import style from "@/components/auth/Auth.module.sass";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: 'onSubmit'
    })
    const handleClick = () => {

    }
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <div className="mt-5 text-center">
                <Button className={style.button__active} type="submit">
                    Login
                </Button>
            </div>
        </form>
    )
}

export default memo(LoginForm)