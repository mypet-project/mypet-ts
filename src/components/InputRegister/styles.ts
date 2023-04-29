import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
        color: red;
        font-size: 0.6106rem;
        margin: 0;
    }

    @media (min-width: 1024px) {
    
    p {
      font-size: 0.7612rem;
    }
  }

`;