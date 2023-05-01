import { Link } from "react-router-dom";
import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Header } from "../RegisterHeader/style";

export function DashboardHeader() {

    const { logout } = useContext(UserContext)

    return (
        <Header>
            <section className="header__limit">
                <div className="header__logos">
                    <img src={MyPetLogo} className="mpet__logo" />
                    <img src={MyPet} className="mpet__title" />
                </div>
                <div className="login__register__div">
                    <img src="https://cdn.icon-icons.com/icons2/472/PNG/48/user_male_circle-48_45856.png"></img>
                    <Link to={"/profile"}>Profile</Link>
                    <button onClick={() => logout()}>Sair</button>
                </div>
            </section>
        </Header>
    )
}