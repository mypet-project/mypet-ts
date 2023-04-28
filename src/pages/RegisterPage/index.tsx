import { FormRegister } from "../../components/FormRegister";
import { RegisterHeader } from "../../components/RegisterHeader";
import { StyledRegisterPage } from "./style";
import CloudBackground from "../../assets/CloudBackground.jpg";

export function RegisterPage() {
  return (
    <>
      <RegisterHeader />
      <StyledRegisterPage>
        <div className="round__one"></div>
        <div className="round__two"></div>
        <section style={{ backgroundImage: `url(${CloudBackground})` }}>
          <div className="pink__div">
            <div className="container__formregister">
              <FormRegister />
            </div>
          </div>
        </section>
        <p className="credits">MyPet © KZ-T16</p>
      </StyledRegisterPage>
    </>
  );
}
