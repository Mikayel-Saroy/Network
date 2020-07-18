import React from "react";
import st from './Post.module.css';
import bald_eagle from './bald_eagle.jpg';

const Post = (props) => {
    return (
        <div className={st.main}>
            <img className={st.icon} src={bald_eagle} alt='img'/>
            <p className={st.status}>like {props.likes}</p>
            <p className={st.message}>{props.post}</p>
        </div>
    )
}

export default Post;