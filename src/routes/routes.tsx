import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProfilePage } from "../pages/ProfilePage";

export function RoutesMain (){
    
    return(
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
    )
}