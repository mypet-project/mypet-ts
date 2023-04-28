import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {

  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
    </>
  )
}

export default App
