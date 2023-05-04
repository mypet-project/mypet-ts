import styled from "styled-components";

export const StyledProfilePage = styled.section`
  padding: 100px 25px 25px 20px;
  display: flex;
  flex-direction: column;

  .card__user {
    display: flex;
    margin: 20px;
  }

  .info__primary {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .info__secondary {
    display: flex;
    gap: 10px;
    padding: 4px;
    flex-direction: column;
    p {
      display: flex;
      gap: 12px;
    }
  }
  .user__circle {
    width: 2.938rem;
    height: 2.938rem;
    box-shadow: 0.5rem 0rem 0 var(--primary-green);
    border-radius: 100%;
    cursor: pointer;
    box-shadow: 0.5rem 0rem 0 var(--primary-green);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .open__modal__profile {
    width: 100%;
    max-width: 60px;
    height: 45px;
    align-self: center;
    margin-top: 20px;
    background: var(--primary-green);
    color: white;
    border-radius: 8px;
    align-self: flex-end;
  }

  @media (min-width: 769px) {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;

    .open__modal__profile {
      width: 55px;
      max-width: none;
      align-self: flex-end;
      float: right;
      margin-top: 0;
    }
  }
`;
