import {useForm} from "react-hook-form";
import {PasswordSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import React, {memo} from "react";
import Button from "@/ui/Button/Button";
import style from "@/components/auth/Auth.module.sass";
import {RegisterFormType} from "@/interfaces/IAuthFields.interface";
import {UserApi} from "../../../utils/api/interceptor";

const RegForm = () => {
    const {register, handleSubmit, formState, formState: {errors}} = useForm({
        resolver: yupResolver(PasswordSchema),
        mode: 'onSubmit'
    })

    // const handleClick = async (data: any) => {
    //     try {
    //         const res = await UserApi.register(data)
    //         console.log(res)
    //     } catch (err) {
    //         console.warn(err)
    //     }
    // }
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <InputField error={errors.name?.message} placeholder='Name' name='name' register={register}/>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <div className="mt-5 text-center">
                <Button className={style.button__active}
                        type="submit">Register</Button>
            </div>
        </form>
    )
}

export default RegForm