import * as serviceWorker from './serviceWorker';
import data, {
    addDialogsMessage,
    addLike,
    addProfilePost,
    handleDialogsMessage,
    handleProfilePost,
    subscribe
} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (data) => {
    ReactDOM.render(<App data={data}
                         handleProfilePost={handleProfilePost}
                         addProfilePost={addProfilePost}
                         addLike={addLike}
                         handleDialogsMessage={handleDialogsMessage}
                         addDialogsMessage={addDialogsMessage}
    />, document.getElementById('root'));
}

rerenderEntireTree(data);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
