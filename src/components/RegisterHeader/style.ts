import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    width: 100%;
    border-radius: 0rem 0rem 0.625rem 0.625rem;
    background-color: var(--primary-color);
    height: 4.475rem;
    z-index: 100;

    .header__limit {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .mpet__title {
        display: none;
    }

    .mpet__logo {
        margin-left: 2rem;
    }

    .login__register__div {
        width: 9.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 2rem;
        align-items: center;

        .register__button {
            height: 2rem;
            width: 5.125rem;
            border-radius: 0.313rem;
            background-color: var(--white);
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            :hover {
                color: var(--white);
                background-color: var(--black);
            }
        }
    }

    @media (min-width: 769px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 84px;
        
        .header__limit {
            width: 70%;
        }

        .header__logos {
            width: 200px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .mpet__title {
        display: block;
        }

        .mpet__logo {
        margin-left: 0;
        }

        .login__register__div {
            margin-right: 0;
            width: 220px;

            span {
                font-size: 20px;
            }

            .register__button {
                width: 121px;
                height: 41px;
                font-size: 20px;
            }
        }
    }
`