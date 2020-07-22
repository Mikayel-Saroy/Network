import React from "react";
import st from './Post.module.css';
import bald_eagle from './bald_eagle.jpg';
import {AddLikeActionCreator} from "../../../../../redux/state";

const Post = (props) => {
    const handleLike = () => {
        let action = AddLikeActionCreator(props.id);
        props.dispatch(action);
    }

    return (
        <div className={st.main}>
            <div className={st.status} onClick={handleLike}>
                <p className={st.statusInner}>like {props.likes}</p>
            </div>
            <div className={st.wrapper}>
                <img className={st.icon} src={bald_eagle} alt='img'/>
                <p className={st.message}>{props.post}</p>
            </div>
        </div>
    )
}

export default Post;