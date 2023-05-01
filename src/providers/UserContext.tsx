import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AxiosError } from "axios";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface ISubmitRegisterParameter {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  birthDate: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser{
   email: string;
   name: string;
   birthDate: string;
}


interface IUserContext {
  submitRegister: (
    formaRegisterData: ISubmitRegisterParameter
  ) => Promise<void>;
    submitLogin: (loginData: ILogin) => void;
    /* logout: () => void; */
    user: IUser | null | undefined;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null | undefined>(null)

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
        toast.error("Ocorreu um erro!");
      }
    }

    async function submitLogin (formData: ILogin) {
      console.log(formData)
        try {
            setLoading(true);
            const response = await api.post("login", formData);
            toast.success("Login feito com sucesso!");

            const { user: userResponse, accessToken: token } = response.data;
            setUser(userResponse);
            localStorage.setItem("@mypet:token", JSON.stringify(token));
            localStorage.setItem("@mypedt:userId", JSON.stringify(userResponse.id))
            api.defaults.headers.common.authoriztion = `Bearer ${token}`
            navigate("/dashboard");
          } catch (error) {
            toast.error("Ocorreu um erro!");
          } finally {
            setLoading(false);
          }
    }

    useEffect(()=>{
      const token = localStorage.getItem("@mypet:token");
      const userId = localStorage.getItem("@mypet:userId");

      const userAutoLogin = async () =>{
        try{
          setLoading(true);
          api.defaults.headers.common.authoriztion = `Bearer ${token}`;
          const {data} = await api.get<IUser>(`users/${userId}`)
          console.log()
          setUser(data)
          navigate("dashboard")
        }catch(error){
          localStorage.removeItem("@mypet:token");
          localStorage.removeItem("@mypet:userId");
        }finally{
          setLoading(false);
        }
      }

      if(token && userId){
        userAutoLogin();
      }
    }, [])

/*     function logout(){
      localStorage.removeItem("@mypet:token");
      localStorage.removeItem("@mypedt:userId");
      setUser(null);
      navigate("/")
    } */

  return (
    <UserContext.Provider
      value={{ submitRegister, submitLogin, /* logout,*/ user}}
    >
      {children}
    </UserContext.Provider>
  );
};
