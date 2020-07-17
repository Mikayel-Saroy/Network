import React from "react";
import st from './News.module.css';
import NewsInfo from "./NewsInfo/NewsInfo";

const News = (props) => {
    return (
        <div className={st.main}>
            <h1>News</h1>
            <NewsInfo info="Here we will post news." />
        </div>
    )
}

export default News;