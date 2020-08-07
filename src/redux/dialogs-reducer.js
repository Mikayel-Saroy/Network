const dialogsReducer = (state, action) => {
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