import React from "react";
import st from './MyPosts.module.css';
import Post from "./Post/Post";


const PostCreator = (data) => data.map(item => <Post post={item.post} likes={item.likes}/>);

const MyPosts = (props) => {
    let element = React.createRef();
    const handleChange = () => {
        let elem = element.current.value;
        props.handleProfilePost(elem);
    }

    return (
        <div className={st.main}>
            <div>
                <div className={st.textarea}>
                    <textarea placeholder='Enter your text.'
                              ref={element}
                              value={props.postsDataCurrent}
                              onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={props.addProfilePost}>Add Post</button>
                </div>
            </div>
            {PostCreator(props.postsData)}
        </div>
    )
}

export default MyPosts;