import { forwardRef } from "react";

import { StyledInputFormRegister } from "./styles";

import * as T from "./types";


export const InputFormRegister = forwardRef<HTMLInputElement, T.IInputFormRegisterProps>(
    ({label, type, id, error, ...rest}, ref)=>{

        return(
            <StyledInputFormRegister>
                {label ? (
                    <label htmlFor={id}>
                        {label}
                    </label>
                ) : null}
                <input type={type} id={id} {...rest} ref={ref} />
                {error ? <p className="inputError">{error}</p> : null}
            </StyledInputFormRegister>
        );
    }
);