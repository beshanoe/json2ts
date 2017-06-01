import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
