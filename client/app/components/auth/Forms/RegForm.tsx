import {useForm} from "react-hook-form";
import {PasswordSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import React, {memo} from "react";
import Button from "@/ui/Button/Button";
import style from "@/components/auth/Auth.module.sass";
import {UserApi} from "@/utils/api/interceptor";
import {setCookie} from "cookies-next";

const RegForm = () => {
    const {register, handleSubmit, formState, formState: {errors}} = useForm({
        resolver: yupResolver(PasswordSchema),
        mode: 'onChange'
    })

    const handleClick = async (data: any) => {
        try {
            const res = await UserApi.register(data)
            setCookie('authToken', res.token, {maxAge: 14 * 60 * 60 * 24});
            console.log(res)
        } catch (err) {
            console.warn(err)
        }
    }
    return (
        <form onSubmit={handleSubmit(handleClick)}>
            <InputField error={errors.fullname?.message} placeholder='Name' name='fullname' register={register}/>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <div className="mt-5 text-center">
                <Button className={style.button__active}
                        disabled={formState.isSubmitting}
                        type="submit">Register</Button>
            </div>
        </form>
    )
}

export default memo(RegForm)