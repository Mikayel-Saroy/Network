import React from "react";
import {NavLink} from "react-router-dom";
import st from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink className={st.dialog} to={path} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;