import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  width: 100%;
  height: auto;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  .cloud__section {
    margin-top: 8rem;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .pink__div {
      width: 100%;
      height: 100%;
      background-color: rgba(var(--primary-rgba), 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 26px 0;

      .container__formregister {
        width: 84%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 769px) {
    padding: 165px 0;
    .cloud__section {
      margin: 9.375rem 0;
    }

    p {
      margin: 10px;
    }

    section {
      margin-top: 150px;
      height: 70%;
    }
  }
`;
