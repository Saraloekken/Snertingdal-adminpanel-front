import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';
import App from './app';
import './style.css';
import Login from './pages/login.js';

ReactDOM.render(
   <Router>
        <App> 
    <Routes />
    </App>
    </Router>,
    document.getElementById('root')
);
    