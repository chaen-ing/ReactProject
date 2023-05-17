import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';

import Library from './ch_03/Library';
import Clock from './ch_04/Clock';
import CommentList from './ch_05/CommentList';
import NotificationList from './ch_06/NotificationList';
import Accommodate from './ch_07/Accommodate';
import ConfirmButton from './ch_08/confirmButton';



ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
