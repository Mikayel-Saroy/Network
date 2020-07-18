import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addProfilePost} from "./redux/state";

export const rerenderEntireTree = (data) => {
    ReactDOM.render(<App data={data}
                         addProfilePost={addProfilePost}/>, document.getElementById('root'));
}