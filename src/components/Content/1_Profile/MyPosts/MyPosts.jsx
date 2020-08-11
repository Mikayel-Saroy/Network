import React from "react";
import st from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    const PostCreator = (data) => data.map(item => <Post post={item.post}
                                                         likes={item.likes}
                                                         id={item.id}
                                                         handleLike={props.handleLike}/>);

    let element = React.createRef();
    const changeFunc = () => {
        let elem = element.current.value;
        props.handleChange(elem);
    }
    const submitFunc = () => {
        props.handleSubmit();
    }

    return (
        <div className={st.main}>
            <div>
                <div className={st.textarea}>
                    <textarea placeholder='Enter your text.'
                              ref={element}
                              value={props.postsDataCurrent}
                              onChange={changeFunc}/>
                </div>
                <div>
                    <button onClick={submitFunc}>Add Post</button>
                </div>
            </div>
            {PostCreator(props.postsData)}
        </div>
    )
}

export default MyPosts;