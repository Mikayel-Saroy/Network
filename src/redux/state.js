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
        if (action.type === 'HANDLE-PROFILE-POST') {
            this._state.profile.postsDataCurrent = action.e;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-PROFILE-POST') {
            let newPost = {
                id: this._state.profile.postsData[0].id + 1,
                post: this._state.profile.postsDataCurrent,
                likes: 0,
            };
            this._state.profile.postsDataCurrent = '';
            this._state.profile.postsData = [newPost, ...this._state.profile.postsData];
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-LIKE') {
            for (let i = 0; i < this._state.profile.postsData.length; i++) {
                if (this._state.profile.postsData[i].id === action.e) {
                    this._state.profile.postsData[i].likes++
                }
            }
            this._callSubscriber(this._state);
        } else if (action.type === 'HANDLE-DIALOGS-MESSAGE') {
            this._state.dialogs.messagesDataCurrent = action.e;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-DIALOGS-MESSAGE') {
            let newMessage = {
                id: this._state.dialogs.messagesData.length + 1,
                message: this._state.dialogs.messagesDataCurrent,
            }
            this._state.dialogs.messagesDataCurrent = ''
            this._state.dialogs.messagesData.push(newMessage);
            this._callSubscriber(this._state)
        }
    },
    /*
    handleProfilePost(e) {
        this._state.profile.postsDataCurrent = e;
        this._callSubscriber(this._state);
    },

    addProfilePost() {
        let newPost = {
            id: this._state.profile.postsData[0].id + 1,
            post: this._state.profile.postsDataCurrent,
            likes: 0,
        };
        this._state.profile.postsDataCurrent = '';
        this._state.profile.postsData = [newPost, ...this._state.profile.postsData];
        this._callSubscriber(this._state);
    },
    addLike(e) {
        for (let i = 0; i < this._state.profile.postsData.length; i++) {
            if (this._state.profile.postsData[i].id === e) {
                this._state.profile.postsData[i].likes++
            }
        }
        this._callSubscriber(this._state);
    },

    handleDialogsMessage(e) {
        this._state.dialogs.messagesDataCurrent = e;
        this._callSubscriber(this._state);
    },
    addDialogsMessage() {
        let newMessage = {
            id: this._state.dialogs.messagesData.length + 1,
            message: this._state.dialogs.messagesDataCurrent,
        }
        this._state.dialogs.messagesDataCurrent = ''
        this._state.dialogs.messagesData.push(newMessage);
        this._callSubscriber(this._state)
        console.log(this._state);
    },
    */
};
export default store;

export const handleProfilePostActionCreator = (elem) => {
    return {
        type: 'HANDLE-PROFILE-POST',
        e: elem,
    }
};
export const addProfilePostActionCreator = () => {
    return {
        type: 'ADD-PROFILE-POST',
    }
};
export const addLikeActionCreator = (id) => {
    return {
        type: 'ADD-LIKE',
        e: id,
    }
};

export const handleDialogsMessageActionCreator = (elem) => {
    return {
        type: 'HANDLE-DIALOGS-MESSAGE',
        e: elem
    }
};
export const addDialogsMessageActionCreator = () => {
    return {
        type: 'ADD-DIALOGS-MESSAGE',
    }
};