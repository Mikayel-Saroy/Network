import {
    addLikeActionCreator,
    addProfilePostActionCreator,
    handleProfilePostActionCreator
} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsDataCurrent: state.profile.postsDataCurrent,
        postsData: state.profile.postsData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (elem) => {
            let action = handleProfilePostActionCreator(elem);
            dispatch(action);
        },
        handleSubmit: () => {
            let action = addProfilePostActionCreator();
            dispatch(action);
        },
        handleLike: (id) => {
            let action = addLikeActionCreator(id);
            dispatch(action);
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;