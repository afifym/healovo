import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';

import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import { muiTheme, styledTheme } from './styles/global/theme';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
      padding: 0;
      margin: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }

    .debug {
      border: 1px solid red !important;
    }

    .debug > * {
      border: 1px solid blue !important;
    }

`;

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <StyledThemeProvider theme={styledTheme}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </StyledThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
