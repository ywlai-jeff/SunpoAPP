import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import TableList from './Table';
import Bills from './Bills';
import Home from './Home';
import index from './index.php'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    // <Router>
        <div>
            {/* <Route render ={()=> < App />} path="/" /> 
            <Route render ={()=> < Home />} path="/home" /> */}
            {/* <Route render ={()=> < List />} path="/list" /> */}
            {/* <Route render ={()=> < Edit />} path="/edit/:id" /> */}
            {/* <Route render ={()=> < Menu />} path="/create" /> */}
            {/* <Route render ={()=> < Show />} path="/show/:id" />*/}
            <App />
            {/* <index/> */}
        </div>
     /* </Router>  */
       
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
