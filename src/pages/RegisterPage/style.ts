import styled from "styled-components";

export const StyledRegisterPage = styled.main`
    width: 100%;
    height: 100vh;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 22px;

    .round__one {
        display: none;
    }

    .round__two {
        display: none;
    }
    
    .pink__div {
        width: 100%;
        height: 100%;
        background-color: rgba(var(--primary-rgba), 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 26px 0;
    }
    .cloud__section {
        margin-top: 8rem;
        width: 100%;
        height: 88%;
    }
    section {
        margin-top: 8rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        


        .container__formregister{
            width: 84%;
            display: flex;
            align-items: center;
            justify-content: center;            
        }
    }
    @media (min-width: 769px) {
        margin-bottom: 0;

        .round__one {
            display: block;
            position: absolute;
            width: 66px;
            height: 66px;
            background-color: var(--primary-green);
            border-radius: 100%;
            top: 98px;
            right: 100px;
        }

        .round__two {
            display: block;
            position: absolute;
            width: 109px;
            height: 109px;
            background-color: var(--secondary-green);
            border-radius: 100%;
            top: 920px;
            left: 100px;
        }

        p {
            margin: 10px;
        }

        section {
            margin-top: 150px;
            height: 70%;
        }
    }
    
`