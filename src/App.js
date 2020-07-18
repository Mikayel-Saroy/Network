import React from 'react';
import st from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/1_Profile/Profile";
import Dialogs from "./components/Content/2_Dialogs/Dialogs";
import News from "./components/Content/3_News/News";
import Music from "./components/Content/4_Music/Music";
import Settings from "./components/Content/5_Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={st.app}>
                <Header/>
                <Navbar/>
                <div className={st.content}>
                    <Route path='/profile'
                           render={() => <Profile postsData={props.data.profile.postsData}
                                                  addProfilePost={props.addProfilePost}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagesData={props.data.dialogs.messagesData}
                                                  dialogsData={props.data.dialogs.dialogsData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;