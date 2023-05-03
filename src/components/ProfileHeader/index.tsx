import { Link } from "react-router-dom";

import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import UserCircle from "../../assets/UserCircle.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Header } from "./styled";

export function ProfileHeader() {
  const { profile, logout } = useContext(UserContext);
  return (
    <Header>
      <section className="header__limit">
        <div className="header__logos">
          <img src={MyPetLogo} className="mpet__logo" />
          <img src={MyPet} className="mpet__title" />
        </div>
      </section>
      <section className="btn__img__header__profile">
        <div className="btn__header__profile">
          <Link className="btn__home" to={"/dashboard"}>
            Home
          </Link>
          <button className="btn__exit" onClick={() => logout()}>
            Sair
          </button>
        </div>
        <img className="user__circle" src={UserCircle}></img>
      </section>
    </Header>
  );
}
