import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
//вытаскиваем хранилище данных store
import {store} from "./store";

ReactDOM.render(
  //заносим хранилище данных store в provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);