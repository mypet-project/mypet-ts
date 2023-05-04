import { IPetData, PetContext } from "../../providers/PetContext";
import DeleteIcon from "../../assets/DeleteIcon.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export interface IPetsProps {
  pets: IPetData;
}

export const PetCard = ({ pets }: IPetsProps) => {
  const { setPetData, setPetCardModal, deletePet } = useContext(PetContext);
  const { profile } = useContext(UserContext);

  function openCardModal() {
    setPetCardModal(true);
  }

  function getPetModalData(pets: IPetData) {
    setPetData(pets);
  }

  return (
    <li
      className="card"
      onClick={() => {
        getPetModalData(pets), openCardModal();
      }}
    >
      <img src={pets.img} alt={pets.name} />
      <div className="card__body">
        <h1 className="card__title">
          {pets.name.length > 15 ? pets.name.slice(0, 14) + "..." : pets.name}
        </h1>

        {pets.userId === profile?.id ? (
          <img
            src={DeleteIcon}
            className="delete__button"
            onClick={(e) => {
              e.stopPropagation(), deletePet(pets.id);
            }}
          />
        ) : null}
      </div>
    </li>
  );
};
