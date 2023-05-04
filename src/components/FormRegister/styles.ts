import styled from "styled-components";

export const StyledFormRegister = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 22px;
  padding: 23px 34px;
  gap: 10px;

  .container__inputs {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  label {
    font-size: 1rem;
    color: var(--black);
  }

  span {
    color: red;
  }

  input {
    width: 100%;
    border: 0.063rem solid var(--primary-color);
    height: 2.188rem;
    border-radius: 0.313rem;
    padding: 0.5rem;
    ::placeholder {
      color: var(--tertiary-gray);
    }
  }

  .container__buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      margin-top: 0.5rem;
      width: 100%;
      height: 2.375rem;
      background: var(--tertiary-green);
      border-radius: 0.313rem;
      color: var(--black);

      :hover {
        background-color: var(--secondary-green);
      }
    }

    p {
      text-align: center;
    }

    .login__button {
      width: 100%;
      height: 2.375rem;
      background: var(--black);
      border-radius: 0.313rem;
      color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      :hover {
        background-color: var(--primary-gray);
      }
    }
  }

  @media (min-width: 769px) and (min-height: 734px) {
    width: 463px;
    label {
      font-size: 20px;
    }

    input {
      height: 53px;
      font-size: 20px;
    }

    .container__buttons {
      button {
        height: 51px;
        font-size: 20px;
        gap: 25px;
      }

      .login__button {
        height: 51px;
        font-size: 20px;
      }
    }
  }

  @media (min-width: 769px) and (max-height: 733px) {
    label {
      font-size: 1rem;
      color: var(--black);
    }

    input {
      width: 100%;
      border: 0.063rem solid var(--primary-color);
      height: 2.188rem;
      border-radius: 0.313rem;
      padding: 0.5rem;
      ::placeholder {
        color: var(--tertiary-gray);
      }
    }

    .container__buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;

      button {
        margin-top: 0.5rem;
        width: 100%;
        height: 2.375rem;
        background: var(--tertiary-green);
        border-radius: 0.313rem;
        color: var(--black);
      }

      p {
        text-align: center;
      }

      .login__button {
        width: 100%;
        height: 2.375rem;
        background: var(--black);
        border-radius: 0.313rem;
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }
    }
  }
`;
