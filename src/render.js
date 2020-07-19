import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {handleProfilePost, addProfilePost, handleDialogsMessage, addDialogsMessage, addLike} from "./redux/state";

export const rerenderEntireTree = (data) => {
    ReactDOM.render(<App data={data}
                         handleProfilePost={handleProfilePost}
                         addProfilePost={addProfilePost}
                         addLike={addLike}
                         handleDialogsMessage={handleDialogsMessage}
                         addDialogsMessage={addDialogsMessage}
    />, document.getElementById('root'));
}