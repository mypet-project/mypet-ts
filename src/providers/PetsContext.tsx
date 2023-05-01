import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface IPetsProviderProps {
    children: React.ReactNode;
  }

export interface IPets{
  id:number;
  name:string;
  img:string;
  category:string;
  description:string;
  adoption:string;  
}

interface IPetsContext{
  pets: IPets[];
}

export const PetsContext = createContext({} as IPetsContext);

export const PetsProvider = ({children}: IPetsProviderProps) => {

    const [pets, setPets] = useState<IPets[]>([])

    useEffect(()=>{
    async function getPets () {
        try {
          const {data} = await api.get('/pets');
          setPets(data)
        } catch (error: any) {
          toast.error(error.message);
        }
      };
      getPets();    
    }, [])

    return (
        <PetsContext.Provider value={{pets}}>{children}</PetsContext.Provider>
    )

}




