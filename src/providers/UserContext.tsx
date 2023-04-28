import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";


interface ISubmitRegisterParameter {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  birthData: string;
}

export interface ILogin {
  email: string;
  password: string;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  submitRegister: (
    formaRegisterData: ISubmitRegisterParameter
  ) => Promise<void>;
    submitLogin: (loginData: ILogin) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<ILogin | null | undefined>()

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    async function submitRegister(formaRegisterData: ISubmitRegisterParameter) {
      delete formaRegisterData.confirmPassword;
      try {
        const response = await api.post("/register", formaRegisterData);
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } catch (error) {
        toast.error("email ja cadastrado");
      }
    }

    async function submitLogin (formData: ILogin) {
      console.log(formData)
        try {
            const response = await api.post("login", formData);
            toast.success("Login feito com sucesso!");

            const { user: userResponse, accessToken: token } = response.data;
            setUser(userResponse);
            localStorage.setItem("@mypet:token", JSON.stringify(token));

            navigate("/dashboard");

          } catch (error: any) {
            console.log(error)
            toast.error(error.message);

          } finally {
            setLoading(false);
          }
    }

  return (
    <UserContext.Provider
      value={{ submitRegister, submitLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
