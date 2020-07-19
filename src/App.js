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
                           render={() => <Profile postsDataCurrent={props.data.profile.postsDataCurrent}
                                                  postsData={props.data.profile.postsData}
                                                  addLike={props.addLike}
                                                  handleProfilePost={props.handleProfilePost}
                                                  addProfilePost={props.addProfilePost}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs messagesDataCurrent={props.data.dialogs.messagesDataCurrent}
                                                  messagesData={props.data.dialogs.messagesData}
                                                  dialogsData={props.data.dialogs.dialogsData}
                                                  addDialogsMessage={props.addDialogsMessage}
                                                  handleDialogsMessage={props.handleDialogsMessage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;