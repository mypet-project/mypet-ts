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
        height: 14rem;
        border-radius: 22px;
        margin-top: -37rem;
    }

    .box__header{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-top: 1rem;
    }

    h2{
        font-size: 1rem;
        width: 50%;
        margin-left: 1rem;
        font-weight: 700;
    }

    .button__close{
        background-color: var(--white);
        color: var(--primary-gray);
        font-weight: 400;
        margin-right: 1rem;
        font-size: 1.5rem;
    }

    input{
        border: 1px solid var(--primary-gray);
        width: 85%;
        margin: 1rem 1rem;
        height: 2.625rem;
        border-radius: 6px;
        padding-left: 15px;
    }

    .button__edit{
        background-color: var(--secondary-green);
        color: var(--white);
        font-size: 0.75rem;
        font-weight: 700;
        width: 4.125rem;
        margin: 1rem 0 0rem 10.5rem;
        border-radius: 4px;
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
        width: 45%;
        height: 14rem;
        border-radius: 22px;
        margin-top: -41rem;
    }

    .box__header{
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 2rem;
    }

    h2{
        font-size: 2rem;
        width: 20%;
        margin-left: 4rem;
        font-weight: 700;
    }

    .button__close{
        background-color: var(--white);
        color: var(--primary-gray);
        font-weight: 400;
        margin-right: 6rem;
        font-size: 2rem;
    }

    input{
        border: 1px solid var(--primary-gray);
        width: 86%;
        margin: 1rem 4rem;
        height: 3rem;
        border-radius: 6px;
        padding-left: 15px;
    }

    .button__edit{
        background-color: var(--secondary-green);
        color: var(--white);
        font-size: 1rem;
        font-weight: 700;
        width: 6.125rem;
        margin: 0rem 0px 0rem 58.4rem;
        border-radius: 4px;
        height: 3rem;
        }
}
`