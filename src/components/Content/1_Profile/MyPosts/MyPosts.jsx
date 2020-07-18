import React from "react";
import st from './MyPosts.module.css';
import Post from "./Post/Post";


const PostCreator = (data) => data.map(item => <Post post={item.post} likes={item.likes}/>);

const MyPosts = (props) => {
    let element = React.createRef();
    const addPost = () => {
        let elem = element.current.value;
        props.addProfilePost(elem);
        element.current.value = '';
    }

    return (
        <div className={st.main}>
            <div>
                <div className={st.textarea}>
                    <textarea placeholder='Enter your text.' ref={element} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {PostCreator(props.postsData)}
        </div>
    )
}

export default MyPosts;