import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    width: 100%;
    font-size: 3vw;
  }

  button, input, textarea {
    border: 1px solid black;
    padding: 1vw;
    outline: none;
  }

  h1 {
    font-size: 6vw;
  }

  h2 {
    font-size: 5.5vw;
  }

  h3 {
    font-size: 5vw;
  }

  h4 {
    font-size: 4.5vw;
  }

  h5 {
    font-size: 4vw;
  }

  h6 {
    font-size: 3.5vw;
  }
`;
