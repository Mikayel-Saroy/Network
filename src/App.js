import React from 'react';
import st from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/1_Profile/Profile";
import DialogsContainer from "./components/Content/2_Dialogs/DialogsContainer";
import News from "./components/Content/3_News/News";
import Music from "./components/Content/5_Music/Music";
import Settings from "./components/Content/6_Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={st.app}>
                <Header/>
                <Navbar/>
                <div className={st.content}>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;