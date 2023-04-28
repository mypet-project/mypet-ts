import { FormRegister } from "../../components/FormRegister"
import { RegisterHeader } from "../../components/RegisterHeader"
import { StyledRegisterPage } from "./style"

export function RegisterPage (){
    
    return(
        <>
            <RegisterHeader/>
            <StyledRegisterPage>
                <section>
                    <div className="containerFormRegister">
                        <FormRegister/>
                    </div>
                </section>
            </StyledRegisterPage>
        </>
    )
}