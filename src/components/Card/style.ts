import { styled } from "styled-components";

export const StyledCard = styled.li`
  -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
  width: max-content;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;

  > .name {
    font-size: 20px;
  }

  > .email {
    font-size: 15px;
  }

  > .phone {
    font-size: 15px;
  }

  > button {
    width: 100%;
    border: none;
    background-color: var(--color-gray-900);
    color: var(--color-purple-400);
    padding: 8px;
    border-radius: 5px;
  }

  > .button-delete {
    background-color: var(--color-gray-400);
    color: var(--color-purple-900);
  }
`;
