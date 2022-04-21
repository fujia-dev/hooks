import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import '@ui-puzzles/rect/dist/index.css';
import 'antd/dist/antd.css';

import { Router } from './src/routers';
import reportWebVitals from './reportWebVitals';
import store from './src/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
