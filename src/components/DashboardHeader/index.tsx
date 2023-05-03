import MyPet from "../../assets/MyPet.svg";
import MyPetLogo from "../../assets/MyPetLogo.svg";
import UserCircle from "../../assets/UserCircle.png";
import SearchIcon from "../../assets/SearchIcon.png";
import { Header } from "./style";
import { UserIconModal } from "../UserIconModal";
import { useState } from "react";


export function DashboardHeader() {
    const [openUserModal, setOpenUserModal] = useState<boolean>(false)

    function openCloseModal() {
        setOpenUserModal(!openUserModal)
    }

    return (
        <Header>
            {openUserModal == true ? <UserIconModal /> : null }
            <section className="header__limit">
                <div className="header__logos">
                    <img src={MyPetLogo} className="mpet__logo" />
                    <img src={MyPet} className="mpet__title" />
                </div>
                <div className="input__div">
                    <input type="text" placeholder="Pesquise!"/>
                    <div className="search__button"><img src={SearchIcon} className="search__icon" /></div>

                    <div className="profile__div" onClick={() => {openCloseModal()}}>
                    <div className="user__circle">
                    <img src={UserCircle} />
                    </div>

                </div>
                </div>
            </section>
        </Header>
    )
}