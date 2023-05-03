import styled from "styled-components";

export const CreateCard = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(var(--primary-black), 0.25);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    .card__modal {
        box-shadow: 0rem 0.25rem 0.25rem rgba(var(--primary-black), 0.25);
        border-radius: 1.375rem;
        width: 85%;
        height: fit-content;
        top: 12.5rem;
        left: 8%;
        background-color: white;
        padding: 1.2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .title__and__button {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }

    h2 {
        font-size: 1rem;
        font-weight: 700;
    }

    input, textarea {
        border: 1px solid var(--primary-gray);
        width: 100%;
        border-radius: 0.375rem;
        padding: 0.5rem;
    }

    input {
        height: 2rem;
    }

    .adoption__select {
        width: 7.75rem;
        border: 1px solid var(--primary-gray);
    }

    .post__button {
        width: 4.125rem;
        height: 1.875rem;
        color: var(--white);
        font-weight: 700;
        font-size: 0.75rem;
        background-color: var(--secondary-green);
        border-radius: 0.25rem;
        align-self: flex-end;
        margin-top: 1rem;
    }
    
    .exit__button {
        font-size: 1.5rem;
        color: var(--primary-gray);
        cursor: pointer;
    }

    @media (min-width: 769px) {
        .card__modal {
            width: 587px;
            padding: 22px 25px 27px 25px;
        }

        h2 {
            font-size: 22px;
        }

        textarea {
            height: 165px;
        }

        .post__button {
            width: 102px;
            height: 37px;
            font-size: 16px;
        }
    }
`