import React from "react";
import {
    addLikeActionCreator,
    addProfilePostActionCreator,
    handleProfilePostActionCreator
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                const handleChange = (elem) => {
                    let action = handleProfilePostActionCreator(elem);
                    store.dispatch(action);
                }
                const handleSubmit = () => {
                    let action = addProfilePostActionCreator();
                    store.dispatch(action);
                }
                const handleLike = (id) => {
                    let action = addLikeActionCreator(id);
                    store.dispatch(action);
                }
                return <MyPosts handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                handleLike={handleLike}
                                postsDataCurrent={state.profile.postsDataCurrent}
                                postsData={state.profile.postsData}/>
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;