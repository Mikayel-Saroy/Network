import React from "react";
import st from "./AddMessage.module.css";
import send_button from "../../send_button.png";



const AddMessage = (props) => {
    let element = React.createRef();
    const keyEnter = (e) => {
        if (e.keyCode === 13) props.addDialogsMessage();
    }
    const handleChange = () => {
        let elem = element.current.value;
        props.handleDialogsMessage(elem);
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
            <div className={st.button} onClick={props.addDialogsMessage}>
                <img src={send_button} alt='img'/>
            </div>
        </div>
    )
}

export default AddMessage;