import styled from "styled-components";

export const ModifyImage = styled.div`
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .5);
        z-index: 1001;
    
    .dialog{
        background-color: var(--white);
        width: 80%;
        height: fit-content;
        border-radius: 22px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .box__header{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    h2{
        font-size: 1rem;
        font-weight: 700;
    }

    .button__close{
        background-color: var(--white);
        color: var(--primary-gray);
        font-weight: 400;
        font-size: 1.5rem;
    }

    input {
        border: 1px solid var(--primary-gray);
        width: 100%;
        height: 2.625rem;
        border-radius: 6px;
    }

    .button__edit{
        background-color: var(--secondary-green);
        color: var(--white);
        font-size: 0.75rem;
        font-weight: 700;
        width: 4.125rem;
        height: 1.875rem;
        border-radius: 4px;
        align-self: flex-end;
        margin-top: 1rem;
    }

    @media (min-width: 769px){
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        background: rgba(0, 0, 0, .5);
        z-index: 1001;
        
        .dialog{
            background-color: var(--white);
            width: 587px;
            height: 191px;
            border-radius: 22px;
            padding: 1rem 2rem;
        }

        .box__header{
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }

        h2{
            font-size: 22px;
            font-weight: 700;
        }

        .button__close{
            background-color: var(--white);
            color: var(--primary-gray);
            font-weight: 400;
            font-size: 2rem;
        }

        input{
            border: 1px solid var(--primary-gray);
            width: 100%;
            height: 3rem;
            border-radius: 6px;
        }

        .button__edit{
            background-color: var(--secondary-green);
            color: var(--white);
            font-size: 1rem;
            font-weight: 700;
            width: 102px;
            height: 37px;
            border-radius: 4px;
            }
    }
`