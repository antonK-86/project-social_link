import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsersThunk,
  getCurrentPage,
  followThunk,
  unFollowThunk,
  editPages,
} from "../../redux/user-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    //debugger;
    this.props.getUsersThunk(this.props.count, this.props.currentPage);
  }

  onPageChange = (page) => {
    //изменение номера страницы
    this.props.getCurrentPage(page);
    this.props.getUsersThunk(this.props.count, page);
  };
  render() {
    return <Users {...this.props} onPageChange={this.onPageChange} />;
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  count: state.usersPage.count,
  totalCount: state.usersPage.totalCount,
  currentPage: state.usersPage.currentPage,
  limitPages: state.usersPage.limitPages,
  j: state.usersPage.j,
  countPage: state.usersPage.countPage,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  getUsersThunk,
  getCurrentPage,
  followThunk,
  unFollowThunk,
  editPages,
})(UsersContainer);
