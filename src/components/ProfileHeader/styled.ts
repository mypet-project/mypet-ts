import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  width: 100vw;
  border-radius: 0rem 0rem 0.625rem 0.625rem;
  background-color: var(--primary-color);
  height: 4.475rem;
  display: flex;

  .header__limit {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .mpet__logo {
    margin-left: 2rem;
  }
  .btn__header__profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .btn__img__header__profile {
    display: flex;
    gap: 12px;
  }
  .btn__home {
    background: white;
    text-decoration: none;
    padding: 3px;
    border-radius: 3px;
    cursor: pointer;
  }
  .btn__exit {
    padding: 3px;
    background: white;
    border-radius: 3px;
    cursor: pointer;
  }
  .user__circle {
    width: 70px;
    height: 70px;
    padding: 3px;
  }

  @media (max-width: 769px) {
    display: flex;
    align-items: center;
    section {
      display: flex;
      gap: 8px;
    }

    .mpet__title {
      display: none;
    }

    .mpet__logo {
      margin-left: 2rem;
    }

    .btn__header__profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;
