import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import UserCircle from "../../assets/UserCircle.png";
import SearchIcon from "../../assets/SearchIcon.png";
import { Header } from "./style";
import { UserIconModal } from "../UserIconModal";
import { useContext, useState } from "react";
import { PetContext } from "../../providers/PetContext";
import { UserContext } from "../../providers/UserContext";

interface IDashboardHeaderProps {
  filterProductList: (valueInput: string) => void;
}

export function DashboardHeader({ filterProductList }: IDashboardHeaderProps) {
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);
  const { setValueInput, valueInput } = useContext(PetContext);
  const {profile} = useContext(UserContext)

  function openCloseModal() {
    setOpenUserModal(!openUserModal);
  }

  return (
    <Header>
      {openUserModal == true ? <UserIconModal /> : null}
      <section className="header__limit">
        <div className="header__logos">
          <img src={MyPetLogo} className="mpet__logo" />
          <img src={MyPet} className="mpet__title" />
        </div>
        <div className="input__div">
          <input
            type="text"
            placeholder="Pesquise!"
            value={valueInput}
            onChange={(e) => {
              e.preventDefault();
              setValueInput(e.target.value);
            }}
          />
          <div className="search__button">
            <img
              src={SearchIcon}
              className="search__icon"
              onClick={() => filterProductList(valueInput)}
            />
          </div>

          <div
            className="profile__div"
            onClick={() => {
              openCloseModal();
            }}
          >
            <div className="user__circle">
              <img src={profile?.img} />
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
}
