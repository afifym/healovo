import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { muiTheme, styledTheme } from './styles/global/theme';
import { Provider } from 'react-redux';
import store from './store';

const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      font-family: ${({ theme }) => theme.fonts.main};
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
        <Provider store={store}>
          <GlobalStyles />
          <App />
        </Provider>
      </React.StrictMode>
    </StyledThemeProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
