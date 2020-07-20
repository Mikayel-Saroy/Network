import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         handleProfilePost={store.handleProfilePost.bind(store)}
                         addProfilePost={store.addProfilePost.bind(store)}
                         addLike={store.addLike.bind(store)}
                         handleDialogsMessage={store.handleDialogsMessage.bind(store)}
                         addDialogsMessage={store.addDialogsMessage.bind(store)}
    />, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
