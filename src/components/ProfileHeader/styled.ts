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
    gap: 0.2rem;
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
    gap: 0.5rem;
  }

  .btn__img__header__profile {
    display: flex;
    gap: 0.1rem;
    margin-right: 2rem;
  }

  .btn__home {
    background-color: var(--white);
    text-decoration: none;
    border-radius: 0.188rem;
    cursor: pointer;
    width: 4.75rem;
    height: 2.563rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);

    :hover {
      background-color: var(--black);
      color: var(--white);
    }
  }

  .btn__exit {
    background-color: var(--white);
    border-radius: 0.188rem;
    cursor: pointer;
    width: 4.75rem;
    height: 2.563rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    text-decoration: none;

    :hover {
      background-color: var(--black);
      color: var(--white);
    }
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

  @media (min-width: 769px) {
    display: flex;
        flex-direction: row;
        justify-content: center;
        height: 84px;
        
        .header__limit {
            width: 70%;
            gap: 0;
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

        .btn__img__header__profile {
          gap: 1.75rem;
        }

        .btn__header__profile {
          gap: 1rem;
        }
        
        .btn__home {
          width: 92px;
          height: 41px;
          font-size: 20px;
        }

        .btn__exit {
          width: 77px;
          height: 41px;
          font-size: 20px;
        }
  }
`;
