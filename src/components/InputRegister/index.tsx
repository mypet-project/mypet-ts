import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
    type: "text" | "email" | "number" | "password" | "date";
    id: string;
    register: UseFormRegisterReturn<string>;
    label: string;
    placeholder: string;
  }

export function InputFormRegister ({ label, type, id, register, placeholder }: IInputProps) {

        return(
            <StyledInput>
                {label ? <label htmlFor={id}>{label}</label> : null}
                <input type={type} id={id} {...register} placeholder={placeholder}/>
            </StyledInput>
        );
    };