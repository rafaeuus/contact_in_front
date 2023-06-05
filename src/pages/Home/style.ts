import { styled } from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);

  > div {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;

    > h1 {
      font-size: 40px;
    }

    .top-box {
      display: flex;
      gap: 10px;
      align-items: center;

      > span {
        font-size: 14px;
      }

      > button {
        background: transparent;
        border: none;
        color: var(--color-purple-400);
        font-size: 14px;
      }
    }
  }

  .form-login,
  .form-register {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 720px) {
      > img {
        display: none;
      }

      > .form {
        max-width: 100%;
        width: 100%;
      }
    }

    > img {
      max-width: 350px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 100%;
      max-width: 500px;
      width: 100%;
      gap: 20px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        > h2 {
          font-size: 50px;
        }
      }

      > form {
        display: flex;
        flex-direction: column;
        gap: 30px;

        > input {
          padding: 10px;
          border: 2px solid var(--color-gray-900);
        }

        > input:focus {
          transition: 0.3s;
          border-color: var(--color-purple-900);
        }

        > button {
          background-color: var(--color-purple-900);
          color: var(--color-white);
          border: none;
          padding: 16px;
          border-radius: 8px;
          transition: 0.5s;
        }

        > button:hover {
          background-color: var(--color-purple-400);
          color: var(--color-gray-900);
        }
      }

      > span {
        align-self: center;
      }
    }
  }
`;
