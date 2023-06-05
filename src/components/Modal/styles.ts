import { styled } from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  .update {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      border: none;
      background-color: var(--color-purple-900);
      color: var(--color-white);
      border-radius: 8px;
      transition: 0.2s;
      padding: 10px;

      &:hover {
        background-color: var(--color-purple-400);
        color: var(--color-gray-900);
      }
    }
  }

  > div {
    background-color: var(--color-white);
    padding: 20px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    > form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      > input {
        padding: 10px;
      }

      > button {
        border: none;
        background-color: var(--color-purple-900);
        color: var(--color-white);
        border-radius: 8px;
        transition: 0.2s;
        padding: 10px;

        &:hover {
          background-color: var(--color-purple-400);
          color: var(--color-gray-900);
        }
      }
    }
  }
`;
