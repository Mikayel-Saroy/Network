import React from "react";
import st from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={st.main}>
            <div className={st.links}>
                <div><NavLink to='/profile' activeClassName={st.active}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' activeClassName={st.active}>Messages</NavLink></div>
                <div><NavLink to='/news' activeClassName={st.active}>News</NavLink></div>
                <div><NavLink to='/music' activeClassName={st.active}>Music</NavLink></div>
                <div><NavLink to='/settings' activeClassName={st.active}>Settings</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar;