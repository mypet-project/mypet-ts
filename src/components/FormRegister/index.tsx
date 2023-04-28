import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TFormRegisterValues, formRegisterSchema } from "../../validations/formRegisterSchema";
import { InputFormRegister } from "../Input";
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
          date={0} placeholder="Digite o seu nome..."
          label="Nome"
          type="text"
          id="nome"
          {...register("name")}
          error={errors.name?.message}        />
        <InputFormRegister
          date={0} placeholder="Digite o seu e-mail..."
          label="E-mail"
          type="email"
          id="e-mail"
          {...register("email")}
          error={errors.email?.message}        />
        <InputFormRegister
          date={0} placeholder="Digite sua senha..."
          label="Senha"
          type="password"
          id="senha"
          {...register("password")}
          error={errors.password?.message}        />
        <InputFormRegister
          date={0} placeholder="Confirme sua senha..."
          label="Confime sua senha"
          type="password"
          id="confirmaSenha"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}        />
        <InputFormRegister
          date={0} placeholder="dd/mm/aa."
          label="Data de Nascimento"
          type="date"
          id="dataNascimento"
          {...register("birthData")}
          error={errors.birthData?.message}        />
      </div>

      <div className="container__buttons">
          <button type="submit">Cadastrar</button>
          <p>Já possui sua conta?</p>
          <Link to="/" className="login__button">Login</Link>
      </div>
    </StyledFormRegister>
  );
};
