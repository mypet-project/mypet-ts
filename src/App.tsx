import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./styles/GlobalStyles";
import 'react-toastify/dist/ReactToastify.css';
import { RoutesMain } from "./routes/routes";
import React from "react";


function App() {

  return (
    <>
    <GlobalStyle />
        <RoutesMain/>
    <ToastContainer />
    </>
  )
}

export default App
