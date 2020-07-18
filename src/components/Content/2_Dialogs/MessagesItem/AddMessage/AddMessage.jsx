import React from "react";
import st from "./AddMessage.module.css";
import send_button from "../../send_button.png";

let element = React.createRef();
const keyEnter = (e) => {
    if (e.keyCode === 13) addMessage();
}
const addMessage = () => {
    let elem = element.current.value;
    alert(elem);
}

const AddMessage = () => {
    return (
        <div className={st.main}>
            <div className={st.input}>
                <input placeholder='Enter your message.'
                       ref={element}
                       onKeyDown={(e) => keyEnter(e)}/>
            </div>
            <div className={st.button} onClick={addMessage}>
                <img src={send_button} alt='img'/>
            </div>
        </div>
    )
}

export default AddMessage;