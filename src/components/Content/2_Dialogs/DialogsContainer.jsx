import React from "react";
import Dialogs from "./Dialogs";
import {addDialogsMessageActionCreator, handleDialogsMessageActionCreator} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                const handleChange = (elem) => {
                    let action = handleDialogsMessageActionCreator(elem);
                    store.dispatch(action);
                }
                const handleSubmit = () => {
                    let action = addDialogsMessageActionCreator();
                    store.dispatch(action);
                }


                return <Dialogs dialogsData={state.dialogs.dialogsData}
                                messagesData={state.dialogs.messagesData}
                                messagesDataCurrent={state.dialogs.messagesDataCurrent}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;