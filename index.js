import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { Sinup } from './Auth/Sinup';
import { Login } from './Auth/Login';

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './HOME/Home.js';
import { List } from './Courses/List.js';
import { Product } from './Product/Product.js';
import { Files } from './Files/Files.js';
import { Readapidata } from './Readapidata/ReadAPI.js';
import { Apidata } from './API2/Api.js';
import Userdata from './UserdataTable/Userdata.js';


import Usertable from './UserdataTable/Usertable.js';
import Usericon from './ICONS/Icoon.js';
import Layout from './weblayout/Weblayout.js';

import DataTest from './DataTest.js/DataTast.js';
import { Provider } from 'react-redux';
import Store from './Store/Store.js';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
    <Routes>
  
      <Route path='/sinup' Component={Sinup}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/' Component={Home}></Route>
      <Route path='Courses' Component={List}></Route>
      <Route path='/product-List' Component={Product}></Route>
      <Route path='/files' Component={Files}></Route>
      <Route path='/readapi' Component={Readapidata}></Route>
      <Route path='apidata'Component={Apidata}></Route>

      <Route path='/userdata' Component={Userdata}></Route>

      <Route path='/userttable' Component={Usertable}></Route>
      <Route path='/icoon' Component={Usericon}></Route>
      <Route path='/layoout' Component={Layout}></Route>
      <Route path='/redux'Component={DataTest}></Route>

      
      
      
      
    </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
