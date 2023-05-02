import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage"
import { GlobalStyle } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/Dashboard";
import { PetProvider } from "./providers/PetContext";
import { RoutesMain } from "./routes/routes";


function App() {

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={ <PetProvider> <DashboardPage/></PetProvider>} />
        <RoutesMain/>
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
