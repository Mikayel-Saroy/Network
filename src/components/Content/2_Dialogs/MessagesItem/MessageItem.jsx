import React from "react";
import st from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={st.message}>
            <p>{props.message}</p>
        </div>
    )
};

export default MessageItem;