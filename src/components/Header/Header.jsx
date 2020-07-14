import React from "react";
import st from './Header.module.css';
import pt2 from './pt2.png';

const Header = () => {
    return (
        <div className={st.main}>
            <img className={st.palm_tree_logo} src={pt2} alt='img'/>
        </div>
    )
}

export default Header;