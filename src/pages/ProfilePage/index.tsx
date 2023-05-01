import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Link } from "react-router-dom"
import { Header } from "../../components/RegisterHeader/style"
import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";

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
                <img src="https://cdn.icon-icons.com/icons2/472/PNG/48/user_male_circle-48_45856.png"></img>
            </Header>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/472/PNG/48/user_male_circle-48_45856.png"></img>
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