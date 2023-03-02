import {useForm} from "react-hook-form";
import {LoginSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import React, {memo} from "react";
import Button from "@/ui/Button/Button";
import style from "@/components/auth/Auth.module.sass";
import {UserApi} from "../../../utils/api/interceptor";

const LoginForm = () => {
    const {register, handleSubmit, formState, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: 'onSubmit'
    })
    const handleClick = async (data: any) => {
        try {
            const res = await UserApi.login(data)
            console.log(res)
        } catch (err) {
            console.warn(err)
        }
    }
    return (
        <form onSubmit={handleSubmit(handleClick)}>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <div className="mt-5 text-center">
                <Button
                    className={style.button__active}
                    disabled={formState.isSubmitting}
                    type="submit">
                    Login
                </Button>
            </div>
        </form>
    )
}

export default memo(LoginForm)