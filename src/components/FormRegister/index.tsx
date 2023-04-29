import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TFormRegisterValues, formRegisterSchema } from "../../validations/formRegisterSchema";
import { InputFormRegister } from "../InputRegister";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledFormRegister } from "./styles";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
  });

  const {submitRegister} = useContext(UserContext)

  return (

    <StyledFormRegister onSubmit={handleSubmit(submitRegister)} noValidate>
      <div className="container__inputs">
        <InputFormRegister
          placeholder="Digite o seu nome..."
          label="Nome"
          type="text"
          id="nome"
          register={register("name")}
             />
             {errors.name ? <p>{errors.name.message}</p> : null}
        <InputFormRegister
          placeholder="Digite o seu e-mail..."
          label="E-mail"
          type="email"
          id="e-mail"
          register={register("email")}       />
          {errors.email ? <p>{errors.email.message}</p> : null}
        <InputFormRegister
          date={0} placeholder="Digite sua senha..."
          label="Senha"
          type="password"
          id="senha"
          register={register("password")}       />
          {errors.password ? <p>{errors.password.message}</p> : null}
        <InputFormRegister
          placeholder="Confirme sua senha..."
          label="Confime sua senha"
          type="password"
          id="confirmaSenha"
          register={register("confirmPassword")}        />
          {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
        <InputFormRegister
          placeholder="dd/mm/aa."
          label="Data de Nascimento"
          type="date"
          id="dataNascimento"
          register={register("birthDate")}        />
          {errors.birthDate ? <p>{errors.birthDate.message}</p> : null}
      </div>

      <div className="container__buttons">
          <button type="submit">Cadastrar</button>
          <p>Já possui sua conta?</p>
          <Link to="/" className="login__button">Login</Link>
      </div>
    </StyledFormRegister>
  );
};
