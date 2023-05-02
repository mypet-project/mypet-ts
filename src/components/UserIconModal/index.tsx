import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { ModalDiv } from "./style";

export function UserIconModal () {
    const { logout } = useContext(UserContext)
    
    return (
        <ModalDiv>
            <div className="profile__button"><Link to="/profile" className="button__link">Perfil</Link></div>
            <div className="logout__button"><Link to="/" onClick={logout} className="button__link">Sair</Link></div>
        </ModalDiv>
    )
}