import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
    padding: 30px;
    gap: 30px;

    > .head {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > h1 {
        width: 100%;
        font-size: 40px;
        text-align: center;
      }

      > button {
        width: 40%;
        align-self: center;
        padding: 15px;
        border: none;
        background-color: var(--color-purple-900);
        color: var(--color-white);
        border-radius: 8px;
        transition: 0.2s;

        &:hover {
          background-color: var(--color-purple-400);
          color: var(--color-gray-900);
        }
      }
    }

    > .contacts {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: scroll;
      gap: 20px;

      &::-webkit-scrollbar {
        width: 10px;
        border-radius: 5px;
      }

      > h2 {
        align-self: center;
      }

      > button {
        width: 60%;
        align-self: center;
        background-color: var(--color-purple-900);
        color: var(--color-white);
        border-radius: 8px;
        transition: 0.2s;
        border: none;
        padding: 10px;

        &:hover {
          background-color: var(--color-purple-400);
        }
      }

      > ul {
        display: flex;
        justify-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
      }
    }
  }
`;
