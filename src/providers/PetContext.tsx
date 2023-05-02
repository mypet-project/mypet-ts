import { isAxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface IDefaultPetsProviderProps {
  children: React.ReactNode;
}

export interface iPets {
  id: number;
  name: string;
  category: string;
  img: string;
}

export interface IPetContext {
  pets: iPets[];
  setPets: (pet: iPets[]) => void;
}

export const PetContext = createContext({} as IPetContext);

export const PetProvider = ({ children }: IDefaultPetsProviderProps) => {
  const [pets, setPets] = useState<iPets[]>([]);

  useEffect(() => {
    async function getPets() {
      try {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@UserId");

        const response = await api.get(`/pets`, {
          headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
          },
        });
        setPets(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }
        console.log(error);
      }
    }
    getPets();
  }, []);

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
