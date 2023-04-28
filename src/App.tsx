import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <GlobalStyle />
    <ToastContainer />
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
    </>
  )
}

export default App
