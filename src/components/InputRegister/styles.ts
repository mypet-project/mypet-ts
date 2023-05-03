import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .div__input{
      height: 4rem;
    }

    @media (min-width: 769px) and (min-height: 734px) {
    
    p {
      font-size: 0.7612rem;
    }

    .div__input{
      height: 80px;
    }
  }

  @media (min-width: 769px) and (max-height: 733px) {
    .div__input{
      height: 60px;
    }
  }

`;