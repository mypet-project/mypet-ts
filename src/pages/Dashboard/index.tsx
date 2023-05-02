import { useContext } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { PetCard } from "../../components/PetCard";
import { PetContext } from "../../providers/PetContext";
import { StyledDashboardPage } from "./style";

export function DashboardPage() {
  const { pets } = useContext(PetContext);

  return (
    <>
      <DashboardHeader />
      <StyledDashboardPage>
        <main className="main__page">
          <section className="title__section">
            <div className="pet__title__div"><h1 className="dashboard__title">Pets do mundo todo ao seu alcance!</h1></div>
              <button className="add__button">+</button>
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
