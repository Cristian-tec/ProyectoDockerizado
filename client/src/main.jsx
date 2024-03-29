import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

import { ThemeProvider } from '@mui/material';
import axios from 'axios'   

//const BASE_URL = process.env.REACT_APP_BASE_URL;
//const PORT = process.env.REACT_APP_API_PORT;

//axios.defaults.baseURL = `${BASE_URL}:${PORT}/`

//axios.defaults.baseURL = `https://api-food.duckdns.org`192.168.20.10
axios.defaults.baseURL = 'http://localhost:4000/'

//axios.defaults.baseURL = `https://postgres-vps.duckdns.org/`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

