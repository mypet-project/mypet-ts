import MyPet from "../../assets/MyPet.svg"
import { Header } from "./style"

export function LoginHeader () {
    return (
        <Header>
            <img src="https://i.ibb.co/TbK6SNP/mpets.png" /> <img src={MyPet} /> <span>Login</span> <button>Registrar</button>
        </Header>
    )
}