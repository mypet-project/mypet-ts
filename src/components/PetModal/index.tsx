import { useContext } from "react";
import { PetContext } from "../../providers/PetContext";
import { UserContext } from "../../providers/UserContext";
import { PetModalCard } from "./style";

export function PetModal() {
  const { petData, setPetCardModal } = useContext(PetContext);
  const { profile } = useContext(UserContext)
  

  function closeCardModal() {
    setPetCardModal(false);
  }

  return (
    <PetModalCard>
      <div className="pet__modal">
        <div className="title__and__button">
          <h1>{petData?.name}</h1>
          <span
            className="exit__button"
            onClick={() => {
              closeCardModal();
            }}
          >
            X
          </span>
        </div>
        <img src={petData?.img} />
        {petData?.adoption === "Sim" ? (
          <p className="available__adopt">Para adoção</p>
        ) : (
          <p className="cant__adopt">Não está para adoção</p>
        )}
        <span className="pet__description">{petData?.description}</span>

        <div className="buttons__and__credits">
          {petData?.userId === profile?.id ? <h2>Por {profile?.name}</h2> : <h2>Por Outro Usuário</h2>}
          {petData?.userId === profile?.id ? <button className="remove__button">Remover</button> : null}
          
        </div>
      </div>
    </PetModalCard>
  );
}
