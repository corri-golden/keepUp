import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import KeepUp from './components/KeepUp';



ReactDOM.render(
    <Router>
        <KeepUp />
    </Router>
    , document.getElementById('root'))


