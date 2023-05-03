import styled from "styled-components";

export const ModalDiv = styled.div`
    position: absolute;
    width: 9.875rem;
    height: 5.75rem;
    background-color: var(--white);
    right: 0.625rem;
    top: 4.25rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0rem 0.01rem 0.25rem rgba(var(--primary-black), 0.25);

    .profile__button, .logout__button {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        
        
        .button__link {
            text-decoration: none;
            margin-left: 1rem;
            color: var(--primary-gray);
        }

    }

    .profile__button {
        border-bottom: 1px solid var(--secondary-gray);
    }

    @media (min-width: 769px)  {
        right: 220px;
        top: 72px;
    }
`