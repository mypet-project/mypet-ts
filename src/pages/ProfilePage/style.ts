import styled from "styled-components";

export const StyledProfilePage = styled.section`
  padding: 100px 25px 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page__controller {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .card__user {
    display: flex;
    margin: 1.25rem;
  }

  .info__primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
  }

  span {
    font-size: 1rem;
  }

  .info__secondary {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.625rem;
    padding: 0.25rem;
    flex-direction: column;
  }

  .user__circle {
    width: 6.063rem;
    height: 6.063rem;
    box-shadow: 0.5rem 0rem 0 var(--primary-green);
    border-radius: 100%;
    box-shadow: 0.5rem 0rem 0 var(--primary-green);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .open__modal__profile {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7.438rem;
    height: 1.813rem;
    border-radius: 0.313rem;
    background-color: var(--tertiary-green);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--white);

    :hover {
      background-color: var(--secondary-green);
    }
  }

  .divider__box {
    width: 100%;
    height: 0.25rem;
    background-color: var(--secondary-gray);
    margin: 1rem 0rem 3rem 0rem;
  }

  .birth__date,
  .profile__mail {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 769px) {
    .page__controller {
      width: 70%;
      padding-top: 100px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .open__modal__profile {
      width: 55px;
      max-width: none;
      align-self: flex-end;
      float: right;
      margin-top: 0;
    }

    .user__circle {
      width: 160px;
      height: 160px;
    }

    h1 {
      font-size: 32px;
    }

    h2 {
      font-weight: 700;
      font-size: 20px;
    }

    span {
      font-size: 20px;
    }

    .open__modal__profile {
      width: 162px;
      height: 41px;
      font-weight: 600;
      font-size: 20px;
    }
  }
`;
