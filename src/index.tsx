// UI
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";


// let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <SamuraiJSApp />
        </React.StrictMode>,
        document.getElementById('root')
    );
// }




// Старая версия
// rerenderEntireTree();

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
