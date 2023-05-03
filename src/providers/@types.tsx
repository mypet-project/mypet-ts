export interface iPets {
  id: number;
  name: string;
  category: string;
  img: string;
}

export interface ipetsProps {
  pets: iPets;
}

export interface IDonate {
  uuidUser: string;
  id: number;
  postId: number;
  pet: iFundraisingPet;
}

export interface IDefaultPetsProviderProps {
  children: React.ReactNode;
}

export interface IPetContext {
  pets: iPets[];
  setPets: (pet: iPets[]) => void;
  fundraisingPet: iFundraisingPet[];
  setFundraisingPet: React.Dispatch<React.SetStateAction<iFundraisingPet[]>>;
  filter: string | boolean;
  setFilter: React.Dispatch<React.SetStateAction<string | boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  donations: IDonate[];
  setDonations: React.Dispatch<React.SetStateAction<IDonate[]>>;
  // search: any;
  // setSearch: React.Dispatch<React.SetStateAction<any>>;
}

export interface iFundraisingPet {
  id: number;
  title: string;
  name: string;
  category: string;
  img: string;
}
