import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "../InputRegister/styles";

interface IInputProps {
    type: "text" | "email" | "number" | "password";
    id: string;
    register: UseFormRegisterReturn<string>;
    label: string;
    placeholder: string;
  }

export function InputForm({ label, type, id, register, placeholder }: IInputProps) {
  return (
    <StyledInput>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input type={type} id={id} {...register} placeholder={placeholder}/>
    </StyledInput>
  );
}
