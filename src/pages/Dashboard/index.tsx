import { useContext, useEffect, useState } from "react";
import { CreateCardModal } from "../../components/CreateCardModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { PetCard } from "../../components/PetCard";
import { PetModal } from "../../components/PetModal";
import { PetContext } from "../../providers/PetContext";
import { StyledDashboardPage } from "./style";

export function DashboardPage() {

  const {
    pets,
    petCardModal,
    createCardModal,
    setCreateCardModal,
    getPets,
    valueInput,
    setNewProductList,
    newProductList,
    setValueInput
  } = useContext(PetContext);

  function openModal() {
    setCreateCardModal(true);
  }

  useEffect(() => {
    getPets();
  }, [pets]);

  const [emptyStatus, setEmptyStatus] = useState<boolean>(false);

  function filterProductList(valueInput: string) {
    const newList = pets.filter((itemPet) =>
      itemPet.name
        .toLowerCase()
        .includes(valueInput.toLowerCase().trim().normalize())
    );
    if (newList.length == 0 && valueInput != null) {
      setEmptyStatus(true);
    } else {
      setEmptyStatus(false);
      setNewProductList(newList);
    }
  }

  return (
    <>
      {petCardModal === true ? <PetModal /> : null}
      <DashboardHeader filterProductList={filterProductList} />
      <StyledDashboardPage>
        {createCardModal === true ? <CreateCardModal /> : null}
        <main className="main__page">
          <section className="title__section">
            <div className="pet__title__div">
              <h1 className="dashboard__title">
                Pets do mundo todo ao seu alcance!
              </h1>
            </div>
            <button
              className="add__button"
              onClick={() => {
                openModal();
              }}
            >
              +
            </button>
            <div className="divider__box"></div>
          </section>
          <section className="cards__section">
            <ul>
              {emptyStatus == true ? (
                <p>Pet não encontrado</p>
              ) : newProductList.length == 0 ? (
                pets.map((pet) => {
                  return <PetCard key={pet.id} pets={pet} />;
                })
              ) : (
                newProductList.map((pet) => {
                  return <PetCard key={pet.id} pets={pet} />;
                })
              )}
            </ul>
          </section>
        </main>
      </StyledDashboardPage>
    </>
  );
}
