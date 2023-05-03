import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Link } from "react-router-dom"
import { Header } from "../../components/RegisterHeader/style"
import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import UserCircle from "../../assets/UserCircle.png";

export function ProfilePage() {
    const { profile, logout } = useContext(UserContext)
    return (
        <>
            <Header>
                <section className="header__limit">
                    <div className="header__logos">
                        <img src={MyPetLogo} className="mpet__logo" />
                        <img src={MyPet} className="mpet__title" />
                    </div>
                </section>
                <img src={UserCircle}></img>
            </Header>
            <div>
                <img src={UserCircle}></img>
                <h1>{profile?.name}</h1>
                <p>{profile?.birthDate}<span></span></p>
                <p>{profile?.email}<span></span></p>
                <h2>Possivel opcional</h2>
                <Link to={"/dashboard"}>Home</Link>
                <button onClick={() => logout()}>Sair</button>
            </div>
        </>

    )
}