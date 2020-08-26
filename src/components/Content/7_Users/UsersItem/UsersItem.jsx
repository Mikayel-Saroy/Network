import React from "react";
import st from './UsersItem.module.css';
import icon_logo from './../user_ic.png';


const UsersItem = (props) => {

    const followButton = () => {
        props.followUsers(props.id);
    };

    return (
        <div className={st.main}>
            <div className={st.left}>
                <img src={icon_logo} alt="IMG"/>
            </div>
            <div className={st.right}>
                <p className={st.name}>{props.name}</p>
                <p className={st.location}>{props.location.country}, {props.location.city}</p>
            </div>
            <div className={st.followButtonOuter} onClick={followButton}>
                <div className={st.followButton} style={{marginLeft: props.marginLeft}}>{props.followText}</div>
            </div>
        </div>
    )
}

export default UsersItem;