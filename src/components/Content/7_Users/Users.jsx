import React from "react";
import st from './Users.module.css';
import UsersItem from "./UsersItem/UsersItem";


const Users = (props) => {
    const UsersCreator = (data) => data.map(item => <UsersItem key={item.id}
                                                               id={item.id}
                                                               name={item.name}
                                                               location={item.location}
                                                               followText={item.followText}
                                                               marginLeft={item.marginLeft}
                                                               followUsers={props.followUsers}/>);

    return (
        <div className={st.main}>
            <h1>Users</h1>
            {UsersCreator(props.usersData)}
        </div>
    );
};

export default Users;