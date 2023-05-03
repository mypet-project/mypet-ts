import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    width: 100%;
    border-radius: 0rem 0rem 0.625rem 0.625rem;
    background-color: var(--primary-color);
    height: 4.475rem;

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

    .input__div {
        display: flex;
        flex-direction: row;
        width: 16.688rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--tertiary-gray);

        input {
            height: 2.563rem;
            width: 8.938rem;
            border-radius: 0.313rem;
            background-color: var(--white);
            padding: 1rem;
            font-size: 1rem;
        }
    }

    .search__button {
        width: 2.75rem;
        height: 2.563rem;
        background-color: var(--tertiary-green);
        border-radius: 0.313rem;
        cursor: pointer;
        margin-left: -2.688rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img {
            width: 1.688rem;
            height: 1.688rem;
        }
    }

    .profile__div {
        width: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 2rem;
        align-items: center;
    }

    .user__circle {
        width: 2.938rem;
        height: 2.938rem;
        box-shadow: 0.5rem 0rem 0 var(--primary-green);
        border-radius: 100%;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
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

        .input__div {
        display: flex;
        flex-direction: row;
        width: 580px;

        input {
            width: 424px;
            height: 41px;
            font-size: 1.25rem;
            font-weight: 400;
        }
    }

    .search__button {
        width: 2.75rem;
        height: 2.563rem;
        background-color: var(--tertiary-green);
        border-radius: 0.313rem;
        cursor: pointer;
        margin-left: -2.688rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        :hover {
            background-color: var(--secondary-green);
        }

        img {
            width: 1.688rem;
            height: 1.688rem;
        }
    }

    .profile__div {
        width: 4rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 2rem;
        align-items: center;
    }

    .user__circle {
        width: 2.938rem;
        height: 2.938rem;
        box-shadow: 0.5rem 0rem 0 var(--primary-green);
        border-radius: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
    }
    `