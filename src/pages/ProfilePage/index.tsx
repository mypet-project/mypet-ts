import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { Header } from "../../components/RegisterHeader/style";
import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import UserCircle from "../../assets/UserCircle.png";
import { StyledProfilePage } from "./style";
import { ProfileHeader } from "../../components/ProfileHeader";

export function ProfilePage() {
  const { profile, logout } = useContext(UserContext);
  return (
    <>
      <ProfileHeader />
      <StyledProfilePage>
        <div className="info__primary">
          <img className="user__circle" src={UserCircle}></img>
          <h1>{profile?.name}</h1>
        </div>
        <div className="info__secondary">
          <p>
            <h2>Data de Nascimento: </h2>
            {profile?.birthDate}
            <span></span>
          </p>
          <p>
            <h2>E-mail:</h2> {profile?.email}
            <span></span>
          </p>
        </div>
        <button className="open__modal__profile">+</button>
      </StyledProfilePage>
      <hr />
    </>
  );
}
