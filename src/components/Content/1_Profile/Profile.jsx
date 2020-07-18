import React from "react";
import st from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={st.main}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addProfilePost={props.addProfilePost}/>
        </div>
    )
}

export default Profile;