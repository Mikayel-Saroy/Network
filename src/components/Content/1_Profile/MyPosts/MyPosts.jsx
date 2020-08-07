import React from "react";
import st from './MyPosts.module.css';
import Post from "./Post/Post";
import {addProfilePostActionCreator, handleProfilePostActionCreator} from "../../../../redux/state";

const MyPosts = (props) => {
    const PostCreator = (data) => data.map(item => <Post post={item.post}
                                                         likes={item.likes}
                                                         id={item.id}
                                                         dispatch={props.dispatch}/>);

    let element = React.createRef();
    const handleChange = () => {
        let elem = element.current.value;
        let action = handleProfilePostActionCreator(elem);
        props.dispatch(action);
    }
    const handleSubmit = () => {
        let action = addProfilePostActionCreator();
        props.dispatch(action);
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
                    <button onClick={handleSubmit}>Add Post</button>
                </div>
            </div>
            {PostCreator(props.postsData)}
        </div>
    )
}

export default MyPosts;