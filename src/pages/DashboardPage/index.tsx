import { useContext } from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { PetsContext } from "../../providers/PetsContext";
import excluir from "../../assets/delete.svg"
import { StyledDashboardPage } from "./style";

export function DashboardPage() {

    const { pets } = useContext(PetsContext)
    return (
        <>
            <DashboardHeader />
            <StyledDashboardPage>
                <div className="box__adicionar">
                <h2>Pets do mundo todo
                    ao seu alcance!</h2>
                <button className="adicionar">+</button>
                </div>
                <hr />
                <ul>
                    {pets.map((element) => (
                        <li key={element.id}>
                            <img src={element.img} alt={element.img} />
                            <h2>{element.name}</h2>
                            <button className="excluir"><img src={excluir} alt="" /></button>
                        </li>
                    ))}
                </ul>

            </StyledDashboardPage>
        </>
    )
}