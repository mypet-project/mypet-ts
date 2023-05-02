import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./providers/UserContext";
import { PetProvider } from "./providers/PetContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PetProvider>
          <App />
        </PetProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
