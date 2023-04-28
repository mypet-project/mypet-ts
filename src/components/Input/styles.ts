/* import * as T from './types'; */
import styled from "styled-components";

/* export const StyleInput = styled.div<T.ISInputProps>`
    width: ${(props) => props.width || "100%"};
    display: flex;
    flex-direction: column;
    gap: 1rem;
`; */

export const StyledInputFormRegister = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
        font-size: 1rem;
        color: lightblue;
        margin-bottom: 5px;
        margin-top: 14px;
    }

    input {
        background-color: transparent;
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px 15px;
        color: grey;
        font-size: 1rem;
        :hover {
        border: 2px solid var(--grey-0);
        }
        :focus {
        outline: none;
        }
        ::placeholder {
        font-size: 1rem;
        font-weight: 400;
        }
    }
    p {
        color: red;
        font-size: 0.6106rem;
    }

    @media (min-width: 1024px) {
    label {
      font-size: 0.7612rem;
    }
    input {
      font-size: 1.015rem;
      ::placeholder {
        font-size: 1.015rem;
      }
    }
    p {
      font-size: 0.7612rem;
    }
  }

`;