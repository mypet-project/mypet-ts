import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

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
   id: number;
}


interface IUserContext {
  submitRegister: (
    formaRegisterData: ISubmitRegisterParameter
  ) => Promise<void>;
    submitLogin: (loginData: ILogin) => void;
    logout: () => void;
    user: IUser | null | undefined;
    profile: IUser | null | undefined;

}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null | undefined>(null)

    const [profile, setProfile] = useState<IUser | null | undefined>(null)

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()


    async function submitRegister(formaRegisterData: ISubmitRegisterParameter) {
      const newForm = {
        img: "https://cdn.icon-icons.com/icons2/472/PNG/48/user_male_circle-48_45856.png",
        birthDate: formaRegisterData.birthDate,
        email: formaRegisterData.email,
        password: formaRegisterData.password,
        name: formaRegisterData.name
      }
      try {
        const response = await api.post("/register", newForm);
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    }

    async function submitLogin (formData: ILogin) {
        try {
            setLoading(true);
            const response = await api.post("/login", formData);
            const { user: userResponse, accessToken: token } = response.data;
            setUser(userResponse);
            toast.success("Login feito com sucesso!");
            localStorage.setItem("@mypet:token", JSON.stringify(token));
            localStorage.setItem("@mypet:userId", JSON.stringify(userResponse.id))
            api.defaults.headers.common.authorization = `Bearer ${token}`
            navigate("/dashboard");
          } catch (error) {
            toast.error("Ocorreu um erro!");
          } finally {
            setLoading(false);
          }
    }

    useEffect(()=>{
      async function userAutologin(){
        try{
          const sToken = localStorage.getItem("@mypet:token");
          const sUserId = localStorage.getItem("@mypet:userId");
          const token = sToken && JSON.parse(sToken)
          const userId =  sUserId && JSON.parse(sUserId)
          setLoading(true);
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          if(token && userId){
            const {data} = await api.get<IUser>(`/users/${userId}`)
            setUser(data)
            navigate("/dashboard")
          }else{
            throw new Error();
          }

        }catch(error){
          logout();
        }finally{
          setLoading(false);
        }
      }
      userAutologin()
    }, [])

    useEffect(() => {
      async function getProfile () {
        const token = JSON.parse(localStorage.getItem("@mypet:token") as string);
        const userId = JSON.parse(localStorage.getItem("@mypet:userId")as string);
        try {
          const { data } = await api.get(`users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
          setProfile(data)
        } catch (error: any) {
        }
      };
      getProfile();
    }, []);


    function logout() {
      localStorage.removeItem("@mypet:token");
      localStorage.removeItem("@mypet:userId");
      setUser(null);
    }

  return (
    <UserContext.Provider
      value={{ submitRegister, submitLogin, logout, user, profile}}>

      {children}
    </UserContext.Provider>
  );
};
