import React from "react";
import st from './MyPosts.module.css';
import Post from "./Post/Post";

const PostCreator = (data) => data.map(item => <Post message={item.message} likes={item.likes}/>);

const MyPosts = (props) => {
    return (
        <div className={st.main}>
            <div>
                <textarea placeholder='Enter your text.'/>
                <button>Add Post</button>
            </div>
            {PostCreator(props.postsData)}
        </div>
    )
}

export default MyPosts;