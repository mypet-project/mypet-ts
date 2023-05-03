import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface IDefaultPetsProviderProps {
  children: React.ReactNode;
}

export interface IPetData {
  id: number;
  name: string;
  category: string;
  img: string;
  adoption: string;
  description: string;
  userId: number;
}

export interface IRegisterPet {
  name: string,
  img: string;
  description: string;
  adoption: string;
}

export interface IPetContext {
  pets: IPetData[];
  setPets: (pet: IPetData[]) => void;
  petData: IPetData | null;
  setPetData: React.Dispatch<React.SetStateAction<IPetData | null>>
  petCardModal: boolean;
  setPetCardModal: React.Dispatch<React.SetStateAction<boolean>>
  createCardModal: boolean;
  setCreateCardModal: React.Dispatch<React.SetStateAction<boolean>>
  registerPet: (registerPetData: IRegisterPet, profileId: number | undefined) => Promise<void>
  deletePet: (cardId: number) => Promise<void>
  getPets: () => Promise<void>,
  valueInput: string, 
  setValueInput: React.Dispatch<React.SetStateAction<string>>,
  setNewProductList: React.Dispatch<React.SetStateAction<IPetData[]>>,
  newProductList: IPetData[]
}

export const PetContext = createContext({} as IPetContext);

export const PetProvider = ({ children }: IDefaultPetsProviderProps) => {
  const [pets, setPets] = useState<IPetData[]>([]);
  const [newProductList, setNewProductList] = useState<IPetData[]>([]);
  const [valueInput, setValueInput] = useState("");

  const [petData, setPetData] = useState<IPetData | null>(null)

  const [petCardModal, setPetCardModal] = useState<boolean>(false)

  const [createCardModal, setCreateCardModal] = useState<boolean>(false)


  async function getPets() {
    try {
      const token = localStorage.getItem("@mypet:token");
      const userId = localStorage.getItem("@mypet:userId");

      const response = await api.get("/pets", {
        headers: {
          Authorization: `Bearer ${token}`,
          userId: userId,
        },
      });
      setPets(response.data);
    } catch (error: any) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  async function registerPet(registerPetData: IRegisterPet, 
    userId: number | undefined) {
      const registerData = {
        name: registerPetData.name,
        img: registerPetData.img,
        description: registerPetData.description,
        adoption: registerPetData.adoption,
        userId: userId
      }
    try {
      await api.post("/pets", registerData)
      toast.success("Post criado com sucesso!")
      setCreateCardModal(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  async function deletePet(cardId: number) {
    try {
      await api.delete(`/pets/${cardId}`)
      toast.success("Deletado com sucesso!")
      setCreateCardModal(false)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        petData,
        setPetData,
        petCardModal,
        setPetCardModal,
        createCardModal,
        setCreateCardModal,
        registerPet,
        deletePet,
        getPets,
        valueInput,
        setValueInput,
        setNewProductList,
        newProductList
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
