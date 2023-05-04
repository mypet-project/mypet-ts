import ErrorPage from "../../assets/ERROR404.gif";
import { StyledErroPage } from "./style";

function NothingHere() {
  return (
    <StyledErroPage>
      <img src={ErrorPage} alt="Error 404" />
      <h2>Nada Encontrado por aqui</h2>
    </StyledErroPage>
  );
}

export default NothingHere;
