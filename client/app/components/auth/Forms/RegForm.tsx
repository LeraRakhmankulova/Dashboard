import {useForm} from "react-hook-form";
import {PasswordSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import React, {memo, useState} from "react";
import Button from "@/ui/Button/Button";
import style from "@/components/auth/Auth.module.sass";
import ErrorAlert from "@/components/auth/Alert/ErrorAlert";
import {useDispatch} from "react-redux";
import {saveData} from "../../../redux/slices/user.slice";
import {setCookie} from "nookies";
import {Api} from "@/utils/api/interceptor";

const RegForm = () => {
    const [error, setError] = useState<string>('')
    const dispatch = useDispatch()
    const {register, handleSubmit, formState, formState: {errors}} = useForm({
        resolver: yupResolver(PasswordSchema),
        mode: 'onChange'
    })

    const handleClick = async (data: any) => {
        try {
            const res = await Api().user.register(data)
            setCookie(null, 'authToken', res.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            dispatch(saveData(data))
            console.log(res)
        } catch (err: any) {
            console.warn(err)
            if (err.response)
                setError(err.response.data.message)
        }
    }
    return (
        <form onSubmit={handleSubmit(handleClick)}>
            <InputField error={errors.fullname?.message} placeholder='Name' name='fullname' register={register}/>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <div className="mt-5 text-center">
                {error && <ErrorAlert errorText={error}/>}
                <Button className={style.button__active}
                        disabled={formState.isSubmitting}
                        type="submit">Register</Button>
            </div>
        </form>
    )
}

export default memo(RegForm)