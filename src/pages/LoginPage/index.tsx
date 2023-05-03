import { useForm } from "react-hook-form";
import { LoginHeader } from "../../components/LoginHeader";
import { loginSchema, TLoginFormValues } from "../../validations/loginSchema";
import { Main } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ILogin, UserContext } from "../../providers/UserContext";
import CloudBackground from "../../assets/CloudBackground.jpg";
import PetImage from "../../assets/PetImage.jpg";
import { Link, Navigate } from "react-router-dom";
import { InputForm } from "../../components/InputLogin/index";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { submitLogin } = useContext(UserContext);

  function submit(formData: ILogin) {
    submitLogin(formData);
  }

  const token = JSON.parse(localStorage.getItem("@mypet:token") as string)

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <LoginHeader />
      <Main>
        <div className="round__one"></div>
        <div className="round__two"></div>
        <section
          className="cloud__section"
          style={{ backgroundImage: `url(${CloudBackground})` }}
        >
          <div className="pink__section">
            <div className="content__container">
              <div className="left__div">
                <h1 className="left__title">Conecte-se com suas fotos de pet!</h1>
                <p>
                  Junte-se hoje ao MyPet e compartilhe seus momentos mais
                  marcantes.</p>
                  <img src={PetImage} className="first__pet__image"/>
              </div>

              <div className="form__container">
                <form onSubmit={handleSubmit(submit)} className="login__form">
                  <InputForm label="E-mail" id="email" type="email" register={register("email")} placeholder="Digite seu e-mail..."/>
                  {errors.email ? <p>{errors.email.message}</p> : null}

                  <InputForm label="Senha" id="password" type="password" register={register("password")} placeholder="Digite sua senha..."/>
                  {errors.password ? <p>{errors.password.message}</p> : null}

                  <button type="submit">Login</button>
                </form>
                <span className="not__registered">Ainda não possui uma conta?</span>
                <Link to={"/register"} className="register__button">Registre-se</Link>
              </div>
            </div>
          </div>
        </section>
        <p className="credits">MyPet © KZ-T16</p>
      </Main>
    </>
  );
}
