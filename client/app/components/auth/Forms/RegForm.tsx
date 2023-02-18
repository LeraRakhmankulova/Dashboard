import {useForm} from "react-hook-form";
import {PasswordSchema} from "@/utils/schemas/validationSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import InputField from "@/ui/InputField/InputField";

const RegForm = () => {
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(PasswordSchema)
    })
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <InputField/>
            <InputField/>
            <InputField/>
        </form>
    )
}

export default RegForm