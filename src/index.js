import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';
import App from './App';
import './style.css';
import Login from './pages/Login';

ReactDOM.render(
    <Router>
        <App> 
            <Login />
            <Routes />
        </App>
    </Router>,
    document.getElementById('root')
);
    