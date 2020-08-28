import {connect} from "react-redux";
import Users from "./Users";
import {followUsersActionCreator} from "../../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followUsers: (id) => {
             let action = followUsersActionCreator(id);
             dispatch(action);
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;