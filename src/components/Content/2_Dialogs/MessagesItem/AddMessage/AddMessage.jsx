import React from "react";
import st from "./AddMessage.module.css";
import send_button from "../../send_button.png";



const AddMessage = (props) => {
    let element = React.createRef();
    const keyEnter = (e) => {
        if (e.keyCode === 13) handleSubmit();
    }
    const handleChange = () => {
        let elem = element.current.value;
        props.dispatch({type: 'HANDLE-DIALOGS-MESSAGE', e: elem})
    }
    const handleSubmit = () => {
        props.dispatch({type: 'ADD-DIALOGS-MESSAGE'})
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