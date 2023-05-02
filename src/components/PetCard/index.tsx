import { iPets } from "../../providers/PetContext";
import DeleteIcon from "../../assets/DeleteIcon.png";

export interface iPetsProps {
  pets: iPets;
}

export const PetCard = ({ pets }: iPetsProps) => {
  return (
    <li className="card">
      <img src={pets.img} alt={pets.name}/>
      <div className="card__body">
        <h1 className="card__title">{pets.name.length > 15 ? pets.name.slice(0, 14) + "..." : pets.name}</h1>

        <img src={DeleteIcon} className="delete__button" />
      </div>
    </li>
  );
};
