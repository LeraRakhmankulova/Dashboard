import {useForm} from "react-hook-form";
import {LoginSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";

const LoginForm = () => {
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(LoginSchema)
    })
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <InputField/>
            <InputField/>
        </form>
    )
}

export default LoginForm