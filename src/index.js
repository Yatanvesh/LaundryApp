import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Pacifico','Oswald','Chivo','Lora','Anton','Righteous', 'Lobster','Bangers','Staatliches','Rubik:600'],
    }
});

ReactDOM.render(
    <App/>
    , document.getElementById('root'));

serviceWorker.unregister();
//Knewave