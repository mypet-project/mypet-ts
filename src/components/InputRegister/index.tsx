import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
    type: "text" | "email" | "number" | "password" | "date";
    id: string;
    register: UseFormRegisterReturn<string>;
    label: string;
    placeholder: string;
    errors?: string ;
  }

export function InputFormRegister ({ errors, label, type, id, register, placeholder }: IInputProps) {

        return(
            <StyledInput>
                <div className="div__input">
                    {label ? <label htmlFor={id}>{label}</label> : null}
                    <input type={type} id={id} {...register} placeholder={placeholder}/>
                    <span>{errors}</span>
                </div>
            </StyledInput>
        );
    };