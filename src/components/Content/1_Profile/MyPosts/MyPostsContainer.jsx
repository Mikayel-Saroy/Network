import React from "react";
import {
    addLikeActionCreator,
    addProfilePostActionCreator,
    handleProfilePostActionCreator
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const handleChange = (elem) => {
        let action = handleProfilePostActionCreator(elem);
        props.store.dispatch(action);
    }
    const handleSubmit = () => {
        let action = addProfilePostActionCreator();
        props.store.dispatch(action);
    }
    const handleLike = (id) => {
        let action = addLikeActionCreator(id);
        props.store.dispatch(action);
    }

    return <MyPosts handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleLike={handleLike}
                    postsDataCurrent={state.profile.postsDataCurrent}
                    postsData={state.profile.postsData}/>

}

export default MyPostsContainer;