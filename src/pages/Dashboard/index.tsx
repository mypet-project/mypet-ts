import { useContext, useEffect } from "react";

import { isAxiosError } from "axios";
import { api } from "../../services/api";

import { PetContext } from "../../providers/PetContext";
import { PetCard } from "../../components/PetList/PetCard";

export const DashboardPage = () => {
  const { fundraisingPet, setFundraisingPet, pets } = useContext(PetContext);

  useEffect(() => {
    async function getListPetsService() {
      try {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@UserId");

        const response = await api.get(`/pets`, {
          headers: {
            Authorization: `Bearer ${token}`,
            userId: userId,
          },
        });
        console.log(fundraisingPet);
        setFundraisingPet(response.data);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.message);
        }
        console.log(error);
      }
    }
    getListPetsService();
  }, []);

  return (
    <>
      <div>
        <h1>Pets do Mundo todo ao seu Alcance !</h1>
      </div>
      <div>
        <button>+</button>
      </div>
      <hr />
      <main>
        <ul>
          {fundraisingPet.length == 0 ? (
            <h2>Nenhum Pet encontrado</h2>
          ) : (
            fundraisingPet.map((pets) => {
              return <PetCard key={pets.id} pets={pets} />;
            })
          )}
        </ul>
      </main>
    </>
  );
};
