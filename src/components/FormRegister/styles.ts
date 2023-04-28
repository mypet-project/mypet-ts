import styled from "styled-components";

export const StyledFormRegister = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    background-color: red;
    border-radius: 22px;
    padding: 23px 20px;

    h1{
        text-align: center;
        font-size: 22px;
    }

    .containerInputs{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        border: 1px solid white;
        margin-bottom: 25px
    }
    
    .containerButtons{
        display: flex;
        flex-direction: column;
        border: 1px solid blue;
        gap: 5px;

        button {
        border-radius: 5px;
        background-color: #8AB59B;
        padding: 9px;
        font-weight: 500;
        font-size: 0.8rem;

            :hover {
                background-color: var(--color-primary-0);
            }
        }

        p{
            text-align: center;
        }

        a{
            text-decoration: none;
            text-align: center;
            color: white;
            border: 2px solid transparent;
            border-radius: 5px;
            background-color: black;
            padding: 9px;
            font-size: 0.5994rem;
            :hover {
            background-color: white;
            }
        }
    }
`