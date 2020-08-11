import React from "react";
import Dialogs from "./Dialogs";
import {addDialogsMessageActionCreator, handleDialogsMessageActionCreator} from "../../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const handleChange = (elem) => {
        let action = handleDialogsMessageActionCreator(elem);
        props.store.dispatch(action);
    }
    const handleSubmit = () => {
        let action = addDialogsMessageActionCreator();
        props.store.dispatch(action);
    }

    return <Dialogs dialogsData={state.dialogs.dialogsData}
                    messagesData={state.dialogs.messagesData}
                    messagesDataCurrent={state.dialogs.messagesDataCurrent}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}/>
}

export default DialogsContainer;