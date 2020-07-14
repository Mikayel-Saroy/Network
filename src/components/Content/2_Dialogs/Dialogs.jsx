import React from "react";
import st from './Dialogs.module.css';
import MessageItem from "./MessagesItem/MessageItem";
import DialogItem from "./DialogsItem/DialogItem";


const dialogsCreator = (data) => data.map(item => <DialogItem id={item.id} name={item.name}/>);
const messagesCreator = (data) => data.map(item => <MessageItem message={item.message}/>);


const Dialogs = (props) => {
    return (
        <div className={st.main}>
            <div className={st.dialogs}>
                <div className={st.dialogInner}>
                    {dialogsCreator(props.dialogsData)}
                </div>
            </div>
            <div className={st.messages}>
                <div className={st.messageInner}>
                    {messagesCreator(props.messagesData)}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;