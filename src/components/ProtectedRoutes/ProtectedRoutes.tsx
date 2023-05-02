import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const ProtectRoutes =()=>{
    const { user } = useContext(UserContext);

    return user ? <Outlet /> : <Navigate to="/" />;
}

//nao usar estados que sejam configurados por uma API na verificação do OUTLET, pois o estado vai chegar atrasado 
//estado começa com null, qndo faz a requisiçao ja é tarde de mais, pois cai no NAVIGATE.