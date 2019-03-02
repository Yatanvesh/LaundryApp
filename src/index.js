import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Pacifico', 'cursive','Lora','Anton','ZCOOL QingKe HuangYou','Righteous', 'IBM Plex Sans','BioRhyme'],

    }
});

ReactDOM.render(
    <App/>
    , document.getElementById('root'));

serviceWorker.unregister();
