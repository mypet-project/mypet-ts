import { createContext, useState } from "react";
import { IDefaultPetsProviderProps, IDonate, IPetContext, iFundraisingPet, iPets } from "./@types";

export const PetContext = createContext({} as IPetContext);

export const PetProvider = ({ children }: IDefaultPetsProviderProps) => {
  const [pets, setPets] = useState<iPets[]>([]);
  const [fundraisingPet, setFundraisingPet] = useState<iFundraisingPet[]>([]);
  const [donations, setDonations] = useState<IDonate[]>([]);
  const [filter, setFilter] = useState<boolean | string>(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PetContext.Provider
      value={{
        pets,
        setPets,
        fundraisingPet,
        setFundraisingPet,
        filter,
        setFilter,
        isLoading,
        setIsLoading,
        donations,
        setDonations,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};
