import { FormRegister } from "../../components/FormRegister";
import { RegisterHeader } from "../../components/RegisterHeader";
import { StyledRegisterPage } from "./style";
import CloudBackground from "../../assets/CloudBackground.jpg";
import { Footer } from "../../components/Footer";
import { Navigate } from "react-router-dom";

export function RegisterPage() {
  const token = JSON.parse(localStorage.getItem("@mypet:token") as string)

  if (token) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <>
      <RegisterHeader />
      <StyledRegisterPage>
        <div className="round__one"></div>
        <div className="round__two"></div>
        <section className="cloud__section" style={{ backgroundImage: `url(${CloudBackground})` }}>
          <div className="pink__div">
            <div className="container__formregister">
              <FormRegister />
            </div>
          </div>

        </section>
      </StyledRegisterPage>
      <Footer/>
    </>
  );
}
