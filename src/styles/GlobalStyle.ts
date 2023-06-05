import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-purple-900: #6433D8;
    --color-purple-400: #A083E7;
    --color-gray-900: #34374D;
    --color-gray-700: #414458;
    --color-gray-400: #C5C7CC;
    --color-white: #FFFFFF;
    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html{
    width: 100svw;
    height: 100svh;
  }
  
  body {
    background-color: var(--color-white);
    color: var(--color-gray-900);
    -webkit-font-smoothing: antialiased;
  }


  body, input, button, textarea {
    font-family: 'Geologica';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
