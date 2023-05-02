import { ipetsProps } from "../../../providers/@types";

export const PetCard = ({ pets }: ipetsProps) => {
  return (
    <li className="card">
      <img src={pets.img} alt={pets.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{pets.name}</h5>
        <p className="card-text">{pets.category}</p>

        <button className="btn btn-primary">Excluir</button>
      </div>
    </li>
  );
};
