import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
