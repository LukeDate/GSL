import { createGlobalStyle } from 'styled-components';

//this global styles file overrides all styles, can be used for fonts, themes etc.
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  .App {
    height: calc(100vh);
  }
  body {
    align-items: center;
    // using styling components and css in js I can pass props to css to make them dynamic
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  input {
    color: ${({ theme }) => theme.text};
  }

//   a {
//     color: ${({ theme }) => theme.text};
//   }
`;