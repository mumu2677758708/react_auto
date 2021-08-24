import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './router/index.js';
import reportWebVitals from './reportWebVitals';
import store from "./store/fund_sup_new";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
        <Provider store={store}>
           <App />
        </Provider>, document.getElementById('root'));

reportWebVitals();
