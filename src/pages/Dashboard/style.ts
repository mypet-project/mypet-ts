import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: center;

    .main__page {
        padding-top: 8rem;
        width: 90%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .dashboard__title {
        font-weight: 700;
        font-size: 1.875rem;
    }

    .title__section {
        display: flex;
        flex-direction: column;
    }

    .add__button {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 1.813rem;
    border-radius: 0.313rem;
    background-color: var(--tertiary-green);
    font-weight: 600;
    font-size: 1.688rem;
    padding-bottom: 0.3rem;
    }

    .divider__box {
        width: 100%;
        height: 0.25rem;
        background-color: var(--secondary-gray);
        margin: 0.5rem 0rem 3rem 0rem;
    }

    .cards__section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    li {
        width: 18.063rem;
        height: 288px;
        box-shadow: 0rem 0.25rem 0.25rem rgba(var(--primary-black), 0.25);
        border-radius: 1.375rem;
        margin-bottom: 4rem;
        cursor: pointer;
    }
    

    img{
        width: 100%;
        height: 12.063rem;
        border-radius: 1.375rem 1.375rem 0rem 0rem;
    }

    .card__body {
        padding: 1.3rem 2rem 1rem 2rem;
        display: flex;
        justify-content: space-between;
    }

    .card__title {
        font-weight: 700;
        font-size: 20px;
    }

    .delete__button {
        width: 2.25rem;
        height: 2.25rem;
    }

    @media (min-width: 769px) {
        height: 100%;

        .main__page {
            width: 70%;
            padding-top: 140px;
            height: 100%;
        }

        .dashboard__title {
            font-size: 48px;
        }

        .pet__title__div {
            width: 500px;
            margin-bottom: 20px;
        }

        .add__button {
            width: 68px;
            height: 41px;
            font-weight: 600;
            font-size: 36px;
            padding-bottom: 10px;
        }

        .divider__box {
            margin: 13px 0px 45px 0px;
        }

        ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 80px;
        }
    }

`