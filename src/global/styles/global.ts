import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => `${theme.font.Montserrat}, sans-serif`};
    font-size: ${({ theme }) => theme.font.fontSize};

    /* Works on Firefox */
      scrollbar-width: thin;
      scrollbar-color: blue orange;
  };

    /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  };

  *::-webkit-scrollbar-track {
    background: none;
  };

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.forBlack};
    border-radius: 20px;
  };

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.softGray} !important;
    background: ${({ theme }) => theme.colors.softGray}!important;
  };

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${({ theme }) => `${theme.font.Montserrat}, sans-serif`};
  };



  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  };

  ul,
  ol {
    list-style: none;
  };

  a {
    text-decoration: none;
    color: inherit;
  };


`;
