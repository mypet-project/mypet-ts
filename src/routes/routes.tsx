import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { ProtectRoutes } from "../components/ProtectedRoutes/ProtectedRoutes";

export function RoutesMain (){
    
    return(
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<LoginPage/>} />
            <Route element={<ProtectRoutes/>}>
                <Route path="/dashboard" /* element={<dashboardPage/>} */></Route>
            </Route>
        </Routes>
    )
}