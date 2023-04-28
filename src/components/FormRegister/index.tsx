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
      <h1>Crie sua conta</h1>

      <div className="containerInputs">
        <InputFormRegister
          placeholder="Digite o seu nome..."
          label="Nome"
          type="text"
          id="nome"
          {...register("name")}
          error={errors.name?.message}
        />
        <InputFormRegister
          placeholder="Digite o seu e-mail..."
          label="E-mail"
          type="email"
          id="e-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <InputFormRegister
          placeholder="Digite sua senha..."
          label="Senha"
          type="password"
          id="senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <InputFormRegister
          placeholder="Confirme sua senha..."
          label="Confime sua senha"
          type="password"
          id="confirmaSenha"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <InputFormRegister
          placeholder="dd/mm/aa."
          label="Data de Nascimento"
          type="data"
          id="dataNascimento"
          {...register("birthData")}
          error={errors.birthData?.message}
        />
      </div>

      <div className="containerButtons">
          <button type="submit">Cadastrar</button>
          <p>Ja possui sua conta</p>
          <Link to="/"> Login</Link>
      </div>
    </StyledFormRegister>
  );
};
