import Dialogs from "./Dialogs";
import {addDialogsMessageActionCreator, handleDialogsMessageActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogs.dialogsData,
        messagesDataCurrent: state.dialogs.messagesDataCurrent,
        messagesData: state.dialogs.messagesData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (elem) => {
            let action = handleDialogsMessageActionCreator(elem);
            dispatch(action);
        },
        handleSubmit: () => {
            let action = addDialogsMessageActionCreator();
            dispatch(action);
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;