import React from "react";
import Profile from "./Profile";
import {
  getProfileThunk,
  updateStatus,
  getProfileStatusThunk,
  setProfileStatusThunk,
  clearProfile,
  savePhotoThunk,
  updateProfileThunk,
  editProfileAction,
  errUpdateProfile,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authId;
      if (!userId) return;
    }
    this.props.getProfileThunk(userId);
    this.props.getProfileStatusThunk(userId);
  }
  componentWillUnmount() {
    this.props.clearProfile(); //для очисти профиля после перехода на др страницу
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  _err: state.profilePage._error,
  isEditProfile: state.profilePage.isEditProfile,
  status: state.profilePage.status,
  authId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getProfileThunk,
    updateProfileThunk,
    updateStatus,
    getProfileStatusThunk,
    setProfileStatusThunk,
    clearProfile,
    savePhotoThunk,
    editProfileAction,
    errUpdateProfile,
  })
)(ProfileContainer);
