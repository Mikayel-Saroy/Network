import React from "react";
import st from './ProfileInfo.module.css';
import bridge from "./bridge.jpg";

const ProfileInfo = () => {
    return (
        <div className={st.main}>
            <div>
                <img className={st.wallpaper} src={bridge} alt='img'/>
            </div>
            <div>
                <p>ava + description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;