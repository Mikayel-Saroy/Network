import React from "react";
import st from './Post.module.css';
import bald_eagle from './bald_eagle.jpg';

const Post = (props) => {
    return (
        <div className={st.main}>
            <div className={st.status} onClick={() => props.dispatch({type: 'ADD-LIKE', e: props.id})}>
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