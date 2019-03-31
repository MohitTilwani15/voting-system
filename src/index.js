import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import configureStore from './createStore';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  body {
    background: -webkit-linear-gradient(top, #4357ff 0%,#4357ff 50%,#3745af 51%,#3745af 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
    }
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
