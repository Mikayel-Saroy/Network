import React from "react";
import st from "./AddMessage.module.css";
import send_button from "../../send_button.png";
import {AddDialogsMessageActionCreator, handleDialogsMessageActionCreator} from "../../../../../redux/state";


const AddMessage = (props) => {
    let element = React.createRef();
    const keyEnter = (e) => {
        if (e.keyCode === 13) handleSubmit();
    }
    const handleChange = () => {
        let elem = element.current.value;
        let action = handleDialogsMessageActionCreator(elem);
        props.dispatch(action);
    }
    const handleSubmit = () => {
        let action = AddDialogsMessageActionCreator();
        props.dispatch(action);
    }
    return (
        <div className={st.main}>
            <div className={st.input}>
                <input placeholder='Enter your message.'
                       ref={element}
                       onKeyDown={(e) => keyEnter(e)}
                       value={props.messagesDataCurrent}
                       onChange={handleChange}/>
            </div>
            <div className={st.button} onClick={handleSubmit}>
                <img src={send_button} alt='img'/>
            </div>
        </div>
    )
}

export default AddMessage;