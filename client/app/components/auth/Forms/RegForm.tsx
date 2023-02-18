import {useForm} from "react-hook-form";
import {PasswordSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";
import style from "@/components/auth/Auth.module.sass";
import React, {FC, memo} from "react";
import Button from "@/ui/Button/Button";
import {Callback} from "escalade";

const RegForm: FC<{setType: Callback}> = ({setType}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(PasswordSchema),
        mode: 'onChange'
    })
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <InputField error={errors.name?.message} placeholder='Name' name='name' register={register}/>
            <InputField error={errors.email?.message} placeholder='Email' name='email' register={register}/>
            <InputField error={errors.password?.message} placeholder='Password' name='password' register={register}/>
            <Button  onClick={() =>setType}>
                Register
            </Button>
        </form>
    )
}

export default memo(RegForm)