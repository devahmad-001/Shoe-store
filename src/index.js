import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
// import outstore from "../src/compnents/projects/create-olx-byStore/store"

// import outstore from './compnents/Gamica Projects/Expense Tracker/expense tracker/reduxStore';


import adstore from './shoe-paradise/Admin panel/All products/adstore'

// import loged from './compnents/Gamica Projects/Expense Tracker/shoe-paradise/login-Signup form/Logedstore';

// import loginstore from './crud operator/loginstore';

import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  

<Provider store={adstore}>
 

  <React.StrictMode>

  {/* <Toaster position='top-center'> */}
 <App />
   {/* </Toaster> */}
    
  </React.StrictMode>
  
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
