let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'HANDLE-DIALOGS-MESSAGE') {
        state.messagesDataCurrent = action.e;
    } else if (action.type === 'ADD-DIALOGS-MESSAGE') {
        let newMessage = {
            id: state.messagesData.length + 1,
            message: state.messagesDataCurrent,
        }
        state.messagesDataCurrent = ''
        state.messagesData.push(newMessage);
    }
    return state;
}
export default dialogsReducer;

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