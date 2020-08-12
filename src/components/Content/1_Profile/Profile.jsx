import React from "react";
import st from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={st.main}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;