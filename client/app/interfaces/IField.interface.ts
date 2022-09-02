import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

interface IFieldProps {
    error?: FieldError | undefined
}

export interface IField extends TypeInputPropsField { }