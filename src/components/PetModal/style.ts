import styled from "styled-components";

export const PetModalCard = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(var(--primary-black), 0.25);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    .pet__modal {
        box-shadow: 0rem 0.25rem 0.25rem rgba(var(--primary-black), 0.25);
        border-radius: 1.375rem;
        width: 85%;
        height: fit-content;
        top: 12.5rem;
        left: 8%;
        background-color: white;
        padding: 1.2rem 1rem 2rem 1rem;
    }

    textarea, input {
        border: 1px solid var(--primary-gray);
        width: 100%;
        border-radius: 0.375rem;
        padding: 0.5rem;
    }

    input {
        width: 80%;
    }

    .title__and__button {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .exit__button {
        font-size: 1.5rem;
        color: var(--primary-gray);
        cursor: pointer;
    }

    h1 {
        font-weight: 700;
        font-size: 1.2rem;
    }

    img {
        margin-top: 0.5rem;
        width: 100%;
        border-radius: 0.188rem;
    }

    .available__adopt, .cant__adopt {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--primary-green)
    }

    .cant__adopt {
        color: var(--primary-gray)
    }

    .pet__description {
        font-size: 0.875rem;
    }

    .buttons__and__credits {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
    }

    .credits__div {
        width: 60%;
    }

    h2 {
        font-weight: 700;
        font-size: 1rem;
    }


    .remove__button, .edit__button {
        width: 4rem;
        height: 1.65rem;
        background-color: var(--primary-red);
        color: var(--white);
        font-weight: 700;
        font-size: 0.75rem;
        border-radius: 0.25rem;
    }

    .edit__button {
        background-color: var(--secondary-green);
    }

    @media (min-width: 769px) {
        .pet__modal {
            width: 587px;
            padding: 22px 25px 27px 25px;
        }

        h1 {
            font-size: 24px;
        }

        .available__adopt, .cant__adopt {
            font-size: 16px;
        }

        .pet__description {
            font-size: 18px;
        }

        h2 {
            font-size: 20px;
        }

        .remove__button, .edit__button {
            width: 102px;
            height: 37px;
            font-size: 1rem;
        }
    }
`