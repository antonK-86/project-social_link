import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsersThunk,
  getCurrentPage,
  followThunk,
  unFollowThunk,
  editPages,
  clearUsers,
} from "../../redux/user-reducer";
import Preloader from "../preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.count, this.props.currentPage);
  }

  componentWillUnmount() {
    this.props.clearUsers();
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
  loading: state.usersPage.loading,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  getUsersThunk,
  getCurrentPage,
  followThunk,
  unFollowThunk,
  editPages,
  clearUsers,
})(UsersContainer);
