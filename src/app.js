import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import Eleanor from './playground/roosevelt';
import ParisApp from './playground/ParisApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<ParisApp />, document.getElementById('app'));


// ReactDOM.render(<Eleanor />, document.getElementById('app'));
