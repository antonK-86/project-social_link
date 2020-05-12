import React from "react";
import UsersS from "./UsersS";
import { connect } from "react-redux";
import {
  addUsersThunk,
  followThunk,
  unFollowThunk,
  clearUsers,
} from "../../../redux/user-reducer";

class UsersSContainer extends React.PureComponent {
  componentDidMount() {
    this.props.addUsersThunk(this.props.count, this.props.numList);
  }

  componentWillUnmount() {
    this.props.clearUsers();
  }

  getScroll = () => {
    if (!this.props.loader) {
      let bottom = document.documentElement.getBoundingClientRect().bottom;
      let height = document.documentElement.clientHeight;
      if (bottom != 0 && bottom <= height + 30) {
        this.addUsersOnList();
      }
    } else return false;
  };

  addUsersOnList = () => {
    this.props.addUsersThunk(this.props.count, this.props.numList);
  };

  render() {
    // window.addEventListener("scroll", this.getScroll);
    return <UsersS {...this.props} addUsersOnList={this.addUsersOnList} />;
  }
}

let mapStateToProps = (state) => ({
  count: state.usersPage.count,
  users: state.usersPage.users,
  numList: state.usersPage.numList,
  loading: state.usersPage.loading,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  addUsersThunk,
  followThunk,
  unFollowThunk,
  clearUsers,
})(UsersSContainer);
