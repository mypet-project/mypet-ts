import { Link } from "react-router-dom";
import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import { Header } from "./style";

export function LoginHeader() {
  return (
    <Header>
      <section className="header__limit">
        <div className="header__logos">
          <img src={MyPetLogo} className="mpet__logo" />
          <img src={MyPet} className="mpet__title" />
        </div>
        <div className="login__register__div">
          <span>Login</span>{" "}
          <Link to={"/register"} className="register__button">
            Registro
          </Link>
        </div>
      </section>
    </Header>
  );
}
