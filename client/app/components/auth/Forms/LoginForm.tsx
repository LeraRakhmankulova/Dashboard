import {useForm} from "react-hook-form";
import {LoginSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import Button from "@/ui/Button/Button";
import React, {FC, memo, SetStateAction} from "react";
import {Callback} from "escalade";


const LoginForm:FC<{setType: Callback}> = ({setType}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginSchema),
        mode: 'onChange'
    })
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <InputField error={errors.name?.message} placeholder='Name' name='name' register={register}/>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <div className="mt-5 mb-1 text-center">
                <Button onClick={() => setType}> Login </Button>
            </div>
        </form>
    )
}

export default memo(LoginForm)