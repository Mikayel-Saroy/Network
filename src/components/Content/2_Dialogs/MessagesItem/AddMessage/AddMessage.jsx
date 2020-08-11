import React from "react";
import st from "./AddMessage.module.css";
import send_button from "../../send_button.png";


const AddMessage = (props) => {
    let element = React.createRef();
    const keyEnter = (e) => {
        if (e.keyCode === 13) submitFunc();
    }
    const changeFunc = () => {
        let elem = element.current.value;
        props.handleChange(elem);
    }
    const submitFunc = () => {
        props.handleSubmit();
    }

    return (
        <div className={st.main}>
            <div className={st.input}>
                <input placeholder='Enter your message.'
                       ref={element}
                       onKeyDown={(e) => keyEnter(e)}
                       value={props.messagesDataCurrent}
                       onChange={changeFunc}/>
            </div>
            <div className={st.button} onClick={submitFunc}>
                <img src={send_button} alt='img'/>
            </div>
        </div>
    )
}

export default AddMessage;