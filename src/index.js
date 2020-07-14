import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
    postsData: [
        {
            id: 1,
            message: "Congratulations for joining to our website.",
            likes: "24",
        },
        {
            id: 2,
            message: "I am a creator of this social network.",
            likes: "27",
        },
        {
            id: 3,
            message: "If you have any questions or suggestions, please don't hesitate to contact me.",
            likes: "32",
        },
    ],
    messagesData: [
        {
            id: 1,
            message: "Hi 50, how are you doing ?",
        },
        {
            id: 2,
            message: "Hey bro, I'm doin great, how bout you ?",
        },
        {
            id: 3,
            message: "Fine, how is your day ?",
        },
        {
            id: 4,
            message: "Thanks, my day is amazing.",
        },
        {
            id: 5,
            message: "That's great. See at the office at 7:00pm.",
        },
        {
            id: 6,
            message: "Sounds great."
        }
    ],
    dialogsData: [
        {
            id: 1,
            name: 'Curtis',
        },
        {
            id: 2,
            name: 'Benjamin',
        },
        {
            id: 3,
            name: 'Grant',
        },
        {
            id: 4,
            name: 'Dan',
        },
        {
            id: 5,
            name: 'Marcus',
        }
    ],
};

ReactDOM.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();