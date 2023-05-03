import { useContext, useEffect } from "react";
import { CreateCardModal } from "../../components/CreateCardModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { PetCard } from "../../components/PetCard";
import { PetModal } from "../../components/PetModal";
import { PetContext } from "../../providers/PetContext";
import { StyledDashboardPage } from "./style";

export function DashboardPage() {
  const { pets, petCardModal, createCardModal, setCreateCardModal, getPets } = useContext(PetContext);

  function openModal() {
    setCreateCardModal(true)
  }

  useEffect(() => {
    getPets();
}, [pets])

  return (
    <>
      {petCardModal === true ? <PetModal /> : null}
      <DashboardHeader />
      <StyledDashboardPage>
      {createCardModal === true ? <CreateCardModal /> : null}
        <main className="main__page">
          <section className="title__section">
            <div className="pet__title__div">
              <h1 className="dashboard__title">
                Pets do mundo todo ao seu alcance!
              </h1>
            </div>
            <button className="add__button" onClick={() => {openModal()}}>+</button>
            <div className="divider__box"></div>
          </section>
          <section className="cards__section">
            <ul>
              {pets.length == 0 ? (
                <h2>Nenhum Pet encontrado.</h2>
              ) : (
                pets.map((pet) => {
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
