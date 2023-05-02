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
          errors={errors.name?.message}
             />
        <InputFormRegister
          placeholder="Digite o seu e-mail..."
          label="E-mail"
          type="email"
          id="e-mail"
          register={register("email")}       
          errors={errors.email?.message}
          />
        <InputFormRegister
          placeholder="Digite sua senha..."
          label="Senha"
          type="password"
          id="senha"
          register={register("password")}       
          errors={errors.password?.message}
          />
        <InputFormRegister
          placeholder="Confirme sua senha..."
          label="Confime sua senha"
          type="password"
          id="confirmaSenha"
          register={register("confirmPassword")}        
          errors={errors.confirmPassword?.message}
          />
        <InputFormRegister
          placeholder="dd/mm/aa."
          label="Data de Nascimento"
          type="date"
          id="dataNascimento"
          register={register("birthDate")}        
          errors={errors.birthDate?.message}
          />
          
      </div>

      <div className="container__buttons">
          <button type="submit">Cadastrar</button>
          <p>Já possui sua conta?</p>
          <Link to="/" className="login__button">Login</Link>
      </div>
    </StyledFormRegister>
  );
};
