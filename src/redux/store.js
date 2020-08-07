import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profile: {
            postsDataCurrent: '',
            postsData: [
                {
                    id: 3,
                    post: "If you have any questions or suggestions, please don't hesitate to contact me.",
                    likes: 33,
                },
                {
                    id: 2,
                    post: "I am a creator of this social network.",
                    likes: 32,
                },
                {
                    id: 1,
                    post: "Congratulations for joining to our website.",
                    likes: 21,
                },
            ],
        },
        dialogs: {
            messagesDataCurrent: '',
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
        },
    },
    _callSubscriber() {

    },  //  Renamed: rerenderEntireTree

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.profile = profileReducer(this._state.profile, action);

        this._callSubscriber(this._state);
    },
};
export default store;