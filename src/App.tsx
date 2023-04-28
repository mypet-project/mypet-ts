import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPage } from "./pages/RegisterPage";

function App() {

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App
